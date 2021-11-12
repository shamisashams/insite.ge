<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Mail\ContactEmail;
use App\Mail\OrderEmail;
use App\Models\Answer;
use App\Models\Blog;
use App\Models\Category;
use App\Models\Feature;
use App\Models\FeatureAnswers;
use App\Models\File;
use App\Models\Page;
use App\Models\Product;
use App\Models\Project;
use App\Models\ProjectRequest;
use App\Models\Setting;
use Barryvdh\DomPDF\Facade as PDF;
use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use Inertia\Inertia;

class CalculatorController extends Controller
{


    /**
     * @param Request $request
     * @return \Inertia\Response
     */
    public function index(Request $request)
    {
        $features = Feature::with('answer')->get();
        return Inertia::render('CostCalc/CostCalc', [
            'features' => $features,
            'state' => json_decode($request['state']),
            'lastPrice' => (int)$request['totalPrice']
        ]);
    }

    public function result(Request $request)
    {
        $featureData = json_decode($request['data'], true);
        $featureIds = [];
        $answerIds = [];

        foreach ($featureData as $key => $feature) {
            $featureIds[] = $key;
            foreach ($feature['answers'] as $answer) {
                $answerIds[] = $answer['id'];
            }
        }

        $features = Feature::whereIn('features.id', $featureIds)->with('answer', function ($query) use ($answerIds) {
            $query->whereIn('answers.id', $answerIds);
        })->get();


        $totalStartTime = 0;
        $totalEndTime = 0;
        $totalEndPrice = 0;
        foreach ($features as $feature) {
            $feature['comment'] = $featureData[$feature->id]['comment'];
            $totalStartTime += $feature->answer->sum(function ($item) {
                return $item->start_time;
            });

            $totalEndTime += $feature->answer->sum(function ($item) {
                return $item->end_time;
            });

            $totalEndPrice += $feature->answer->sum(function ($item) {
                return $item->end_price;
            });
        }

        return Inertia::render('CostCalc/ResultEstimate/ResultEstimate', [
            'data' => $features,
            'totalPrice' => $request['totalPrice'],
            'totalEndPrice' => $totalEndPrice,
            'totalStartTime' => $totalStartTime,
            'totalEndTime' => $totalEndTime,
            'requestData' => $request['data']
        ]);
    }

    public function save(Request $request)
    {
        $features = $request['data'];
        $count = 0;
        $project = false;

        DB::beginTransaction();

        if ($features) {
            $project = Project::create([
                'total_price' => $request['totalPrice'],
                'time' => $request['time']
            ]);
        }

        foreach ($features as $feature) {
            $ids = [];
            if ($feature['answer']) {
                $ids = array_column($feature['answer'], 'id');
            }

            $projectRequests = ProjectRequest::create([
                'feature_id' => $feature['id'],
                'answer' => json_encode($ids),
                'project_id' => $project->id,
                'comment' => $feature['comment']
            ]);

            if (!$projectRequests) {
                $count++;
            }
        }

        if ($project) {
            $this->createPdf($project, $features, $request['time'], $request['totalPrice'], $request['totalEndPrice']);
        }

        $count == 0 && $project ? DB::commit() : DB::rollBack();
        return redirect()->back()->with('id', $project->id);
    }

    public function generatePDF(Request $request)
    {
        $project = Project::where(['id' => $request['projectId']])->first();
        $pdf = '/storage/pdf/' . $project->id . '/' . $project->pdf->title;
        return response()->json($pdf);
    }

    public function sendEmail(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:55',
            'email' => 'required|email',
            'phone' => 'required|max:1024'
        ]);

        $data = [
            'name' => $request['name'],
            'mail' => $request['email'],
            'phone' => $request['phone'],
        ];

        Project::where(['id' => $request['projectId']])->update([
            'name' => $data['name'],
            'email' => $data['mail'],
            'phone' => $data['phone']
        ]);

        $features['data'] = $request['data'];
        $features['totalPrice'] = $request['totalPrice'];
        $features['totalStartTime'] = $request['totalStartTime'];
        $features['totalEndTime'] = $request['totalEndTime'];

        $mailTo = Setting::where(['key' => 'email'])->first();

        if (($mailTo !== null) && $mailTo->value) {
            Mail::to($mailTo->value)->send(new OrderEmail($features, $mailTo->value, ''));
            Mail::to($data['mail'])->send(new OrderEmail($features, $mailTo->value, 'Insite'));
        }

        return redirect()->back();
    }


    public function createPdf($project, $features, $time, $totalPrice, $totalEndPrice)
    {
        $pdf = PDF::loadView('client/pdf/pdf', [
            'features' => $features,
            'totalStartPrice' => $totalPrice,
            'totalEndPrice' => $totalEndPrice,
            'totalTime' => $time
        ]);


        $directory = '/public/pdf/' . $project->id;
        if (!Storage::exists($directory)) {
            Storage::makeDirectory('/public/pdf/' . $project->id);
        }
        $path = public_path('storage/pdf/' . $project->id);
        $fileName = time() . '.' . 'pdf';
        $pdf->save($path . '/' . $fileName);


        $project->files()->create([
            'title' => $fileName,
            'path' => '/storage/pdf/' . $project->id . '/' . $fileName,
            'format' => 'pdf',
            'type' => File::FILE_MAIN
        ]);
    }
}
