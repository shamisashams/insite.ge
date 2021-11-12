<?php

namespace App\Http\Controllers\Client;

use App\Helpers\VacancyHelper;
use App\Http\Controllers\Controller;
use App\Http\Requests\VacancyRequest;
use App\Models\Blog;
use App\Models\Category;
use App\Models\File;
use App\Models\Page;
use App\Models\Product;
use App\Models\Project;
use App\Models\Vacancy;
use App\Modules\Pages\Helpers\BlogHelper;
use Carbon\Carbon;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class VacancyController extends Controller
{


    /**
     * @param string $locale
     * @param Request $request
     * @return \Inertia\Response
     */
    public function index(Request $request)
    {
        $baseData['data'] = Vacancy::orderBy('created_at', 'desc')->paginate(10);
        return Inertia::render('Vacancies/Vacancies', [
            'vacancies' => $baseData
        ]);

    }

    public function show(Request $request, $id)
    {
        $baseData['vacancy'] = Vacancy::findOrFail($id);
        return Inertia::render('Vacancies/ShowVacancy/ShowVacancy', [
            'data' => $baseData
        ]);
    }

    public function saveRequest(VacancyRequest $request)
    {
        $vacancy = Vacancy::findOrFail($request['id']);

        try {
            $vacancyRequest = \App\Models\VacancyRequest::create([
                'vacancy_id' => $vacancy->id,
                'full_name' => $request['fullname'],
                'email' => $request['email'],
                'phone' => $request['phone'],
                'portfolio_link' => $request['portfolio_link'],
            ]);

            if ($request->hasFile('file')) {
                $image = $request->file('file');
                $imagename = date('Ymhs') . str_replace(' ', '', $image->getClientOriginalName());
                $destination = base_path() . '/storage/app/public/' . 'Vacancy-Request' . '/' . $vacancyRequest->id;
                $image->move($destination, $imagename);
                $vacancyRequest->files()->create([
                    'title' => $imagename,
                    'path' => 'storage/' . 'Vacancy-Request' . '/' . $vacancyRequest->id,
                    'format' => $image->getClientOriginalExtension(),
                    'type' => File::FILE_MAIN
                ]);
            }
            return redirect(locale_route('vacancy'))->with('success', 'Ваша заявка успешно отправлена');
        } catch (\Illuminate\Database\QueryException $exception) {
            return $exception->errorInfo;
        }
    }


}
