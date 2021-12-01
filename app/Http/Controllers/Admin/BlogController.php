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
use App\Http\Requests\Admin\BlogRequest;
use App\Http\Requests\Admin\ProjectRequest;
use App\Models\Blog;
use App\Models\Project;
use App\Repositories\BlogRepositoryInterface;
use App\Repositories\CategoryRepositoryInterface;
use App\Repositories\ProjectRepositoryInterface;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Routing\Redirector;
use Illuminate\Support\Arr;
use ReflectionException;

class BlogController extends Controller
{
    /**
     * @var BlogRepositoryInterface
     */
    private $blogRepository;

    /**
     * @var CategoryRepositoryInterface
     */
    private $categoryRepository;

    /**
     * @param BlogRepositoryInterface $blogRepository
     * @param CategoryRepositoryInterface $categoryRepository
     */
    public function __construct(
        BlogRepositoryInterface     $blogRepository,
        CategoryRepositoryInterface $categoryRepository
    )
    {
        $this->blogRepository = $blogRepository;
        $this->categoryRepository = $categoryRepository;

    }

    /**
     * Display a listing of the resource.
     *
     * @return Application|Factory|View
     */
    public function index(BlogRequest $request)
    {

        return view('admin.pages.blog.index', [
            'blogs' => $this->blogRepository->getData($request)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Application|Factory|View
     */
    public function create()
    {
        $blog = $this->blogRepository->model;

        $url = route('blog.store');
        $method = 'POST';

        return view('admin.pages.blog.form', [
            'blog' => $blog,
            'url' => $url,
            'method' => $method,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param BlogRequest $request
     *
     * @return Application|RedirectResponse|Redirector
     * @throws ReflectionException
     */
    public function store(BlogRequest $request)
    {
        $saveData = Arr::except($request->except('_token'), []);
        $saveData['status'] = isset($saveData['status']) && (bool)$saveData['status'];

        $blog = $this->blogRepository->create($saveData);

        // Save Files
        if ($request->hasFile('images') || $request->hasFile('main-image')) {
            $blog = $this->blogRepository->saveFiles($blog->id, $request);
        }

        return redirect(route('blog.show', $blog->id))->with('success', __('admin.create_successfully'));

    }

    /**
     * Display the specified resource.
     *
     * @param Blog $project
     *
     * @return Application|Factory|View
     */
    public function show(Blog $blog)
    {
        return view('admin.pages.blog.show', [
            'blog' => $blog,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Blog $project
     * @return Application|Factory|View
     */
    public function edit(Blog $blog)
    {
        $url = route('blog.update', $blog->id);
        $method = 'PUT';

        return view('admin.pages.blog.form', [
            'blog' => $blog,
            'url' => $url,
            'method' => $method,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param BlogRequest $request
     * @param Blog $project
     * @return Application|RedirectResponse|Redirector
     * @throws ReflectionException
     */
    public function update(BlogRequest $request, Blog $blog)
    {
        $saveData = Arr::except($request->except('_token'), []);
        $saveData['status'] = isset($saveData['status']) && (bool)$saveData['status'];

        $this->blogRepository->update($blog->id, $saveData);


        $this->blogRepository->saveFiles($blog->id, $request);


        return redirect(route('blog.show', $blog->id))->with('success', __('admin.update_successfully'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Blog $project
     * @return Application|RedirectResponse|Redirector
     */
    public function destroy(Blog $blog)
    {
        if (!$this->blogRepository->delete($blog->id)) {
            return redirect(route('blo.show', $blog->id))->with('danger', __('admin.not_delete_message'));
        }
        return redirect(route('blog.index'))->with('success', __('admin.delete_message'));
    }
}
