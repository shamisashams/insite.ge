<?php
/**
 *  app/Http/Controllers/Admin/ProjectController.php
 *
 * Date-Time: 30.07.21
 * Time: 10:37
 * @author Vito Makhatadze <vitomaxatadze@gmail.com>
 */


namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\NewsRequest;
use App\Http\Requests\Admin\ProjectRequest;
use App\Models\News;
use App\Models\Project;
use App\Repositories\NewsRepositoryInterface;
use App\Repositories\CategoryRepositoryInterface;
use App\Repositories\ProjectRepositoryInterface;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Routing\Redirector;
use Illuminate\Support\Arr;
use ReflectionException;

class NewsController extends Controller
{
    /**
     * @var NewsRepositoryInterface
     */
    private $newsRepository;


    /**
     * @param NewsRepositoryInterface $newsRepository
     */
    public function __construct(
        NewsRepositoryInterface     $newsRepository
    )
    {
        $this->newsRepository = $newsRepository;

    }

    /**
     * Display a listing of the resource.
     *
     * @return Application|Factory|View
     */
    public function index(NewsRequest $request)
    {

        return view('admin.pages.news.index', [
            'news' => $this->newsRepository->getData($request)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Application|Factory|View
     */
    public function create()
    {
        $news = $this->newsRepository->model;

        $url = route('news.store');
        $method = 'POST';

        return view('admin.pages.news.form', [
            'news' => $news,
            'url' => $url,
            'method' => $method,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param NewsRequest $request
     *
     * @return Application|RedirectResponse|Redirector
     * @throws ReflectionException
     */
    public function store(NewsRequest $request)
    {
        $saveData = Arr::except($request->except('_token'), []);
        $saveData['status'] = isset($saveData['status']) && (bool)$saveData['status'];

        $news = $this->newsRepository->create($saveData);

        // Save Files
        if ($request->hasFile('images') || $request->hasFile('main-image')) {
            $news = $this->newsRepository->saveFiles($news->id, $request);
        }

        return redirect(route('news.show', $news->id))->with('success', __('admin.create_successfully'));

    }

    /**
     * Display the specified resource.
     *
     * @param News $project
     *
     * @return Application|Factory|View
     */
    public function show(News $news)
    {
        return view('admin.pages.news.show', [
            'news' => $news,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param News $news
     * @return Application|Factory|View
     */
    public function edit(News $news)
    {
        $url = route('news.update', $news->id);
        $method = 'PUT';

        return view('admin.pages.news.form', [
            'news' => $news,
            'url' => $url,
            'method' => $method,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param NewsRequest $request
     * @param News $project
     * @return Application|RedirectResponse|Redirector
     * @throws ReflectionException
     */
    public function update(NewsRequest $request,News $news)
    {
        $saveData = Arr::except($request->except('_token'), []);
        $saveData['status'] = isset($saveData['status']) && (bool)$saveData['status'];

        $this->newsRepository->update($news->id, $saveData);


        $this->newsRepository->saveFiles($news->id, $request);


        return redirect(route('news.show', $news->id))->with('success', __('admin.update_successfully'));
    }

    /**
     * Remove the specified resource from storage.
     * @param News $project
     * @return Application|RedirectResponse|Redirector
     */
    public function destroy(News $news)
    {
        if (!$this->newsRepository->delete($news->id)) {
            return redirect(route('blo.show', $news->id))->with('danger', __('admin.not_delete_message'));
        }
        return redirect(route('news.index'))->with('success', __('admin.delete_message'));
    }
}
