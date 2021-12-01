<?php
/**
 *  app/Http/Controllers/Admin/ProjectController.php
 *
 * Date-Time: 30.07.21
 * Time: 10:37
 * @author Insite International<hello@insite.ge>
 */


namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\AnswerRequest;
use App\Http\Requests\Admin\ProjectRequest;
use App\Models\Answer;
use App\Repositories\AnswerRepositoryInterface;
use App\Repositories\CategoryRepositoryInterface;
use App\Repositories\FeatureRepositoryInterface;
use App\Repositories\ProjectRepositoryInterface;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Redirector;
use Illuminate\Support\Arr;
use ReflectionException;

class AnswerController extends Controller
{
    /**
     * @var AnswerRepositoryInterface
     */
    private $answerRepository;
    private $featureRepository;

    /**
     * @param AnswerRepositoryInterface $answerRepository
     */
    public function __construct(AnswerRepositoryInterface $answerRepository, FeatureRepositoryInterface $featureRepository)
    {
        $this->answerRepository = $answerRepository;
        $this->featureRepository = $featureRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Application|Factory|View
     */
    public function index(Request $request)
    {

        return view('admin.pages.answer.index', [
            'answers' => $this->answerRepository->getData($request)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Application|Factory|View
     */
    public function create()
    {
        $answer = $this->answerRepository->model;

        $url = route('answer.store', [], false);
        $method = 'POST';

        return view('admin.pages.answer.form', [
            'answer' => $answer,
            'url' => $url,
            'method' => $method,
            'features'=> $this->featureRepository->all(['*'])
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param AnswerRequest $request
     *
     * @return Application|RedirectResponse|Redirector
     * @throws ReflectionException
     */
    public function store(AnswerRequest $request)
    {
        $saveData = Arr::except($request->except('_token'), []);
        $saveData['status'] = isset($saveData['status']) && (bool)$saveData['status'];

        $answer = $this->answerRepository->create($saveData);

        // Save Files
        if ($request->hasFile('images')) {
            $answer = $this->answerRepository->saveFiles($answer->id, $request);
        }

        return redirect(route('answer.show', $answer->id))->with('success', 'Create successfully');

    }

    /**
     * Display the specified resource.
     *
     * @param Answer $answer
     *
     * @return Application|Factory|View
     */
    public function show(Answer $answer)
    {
        return view('admin.pages.answer.show', [
            'answer' => $answer
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Answer $answer
     * @return Application|Factory|View
     */
    public function edit(Answer $answer)
    {
        $url = route('answer.update', $answer->id);
        $method = 'PUT';

        return view('admin.pages.answer.form', [
            'answer' => $answer,
            'url' => $url,
            'method' => $method,
            'features'=> $this->featureRepository->all(['*'])
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param AnswerRequest $request
     * @param Answer $answer
     * @return Application|RedirectResponse|Redirector
     * @throws ReflectionException
     */
    public function update(AnswerRequest $request,Answer $answer)
    {
        $saveData = Arr::except($request->except('_token'), []);
        $saveData['status'] = isset($saveData['status']) && (bool)$saveData['status'];

        $this->answerRepository->update($answer->id, $saveData);


        $this->answerRepository->saveFiles($answer->id, $request);


        return redirect(route('answer.show', $answer->id))->with('success', __('admin.update_successfully'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Answer $answer
     * @return Application|RedirectResponse|Redirector
     */
    public function destroy(Answer $answer)
    {
        if (!$this->answerRepository->delete($answer->id)) {
            return redirect(route('answer.show', $answer->id))->with('danger', __('admin.not_delete_message'));
        }
        return redirect(route('answer.index'))->with('success', __('admin.delete_message'));
    }
}
