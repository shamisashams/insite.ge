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
use App\Http\Requests\Admin\VacancyRequest;
use App\Http\Requests\Admin\ProjectRequest;
use App\Models\Vacancy;
use App\Models\Project;
use App\Repositories\VacancyRepositoryInterface;
use App\Repositories\CategoryRepositoryInterface;
use App\Repositories\ProjectRepositoryInterface;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Routing\Redirector;
use Illuminate\Support\Arr;
use ReflectionException;

class VacancyController extends Controller
{
    /**
     * @var VacancyRepositoryInterface
     */
    private $vacancyRepository;

    /**
     * @param VacancyRepositoryInterface $vacancyRepository
     */
    public function __construct(
        VacancyRepositoryInterface     $vacancyRepository
    )
    {
        $this->vacancyRepository = $vacancyRepository;

    }

    /**
     * Display a listing of the resource.
     *
     * @return Application|Factory|View
     */
    public function index(VacancyRequest $request)
    {

        return view('admin.pages.vacancy.index', [
            'vacancies' => $this->vacancyRepository->getData($request)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Application|Factory|View
     */
    public function create()
    {
        $vacancy = $this->vacancyRepository->model;

        $url = route('vacancy.store');
        $method = 'POST';

        return view('admin.pages.vacancy.form', [
            'vacancy' => $vacancy,
            'url' => $url,
            'method' => $method,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param VacancyRequest $request
     *
     * @return Application|RedirectResponse|Redirector
     * @throws ReflectionException
     */
    public function store(VacancyRequest $request)
    {
        $saveData = Arr::except($request->except('_token'), []);
        $saveData['status'] = isset($saveData['status']) && (bool)$saveData['status'];

        $vacancy = $this->vacancyRepository->create($saveData);

        // Save Files
        if ($request->hasFile('images') || $request->hasFile('main-image')) {
            $vacancy = $this->vacancyRepository->saveFiles($vacancy->id, $request);
        }

        return redirect(route('vacancy.show', $vacancy->id))->with('success', __('admin.create_successfully'));

    }

    /**
     * Display the specified resource.
     *
     * @param Vacancy $project
     *
     * @return Application|Factory|View
     */
    public function show(Vacancy $vacancy)
    {
        return view('admin.pages.vacancy.show', [
            'vacancy' => $vacancy,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Vacancy $project
     * @return Application|Factory|View
     */
    public function edit(Vacancy $vacancy)
    {
        $url = route('vacancy.update', $vacancy->id);
        $method = 'PUT';

        return view('admin.pages.vacancy.form', [
            'vacancy' => $vacancy,
            'url' => $url,
            'method' => $method,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param VacancyRequest $request
     * @param Vacancy $project
     * @return Application|RedirectResponse|Redirector
     * @throws ReflectionException
     */
    public function update(VacancyRequest $request,Vacancy $vacancy)
    {
        $saveData = Arr::except($request->except('_token'), []);
        $saveData['status'] = isset($saveData['status']) && (bool)$saveData['status'];

        $this->vacancyRepository->update($vacancy->id, $saveData);


        $this->vacancyRepository->saveFiles($vacancy->id, $request);


        return redirect(route('vacancy.show', $vacancy->id))->with('success', __('admin.update_successfully'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Vacancy $project
     * @return Application|RedirectResponse|Redirector
     */
    public function destroy(Vacancy $vacancy)
    {
        if (!$this->vacancyRepository->delete($vacancy->id)) {
            return redirect(route('blo.show', $vacancy->id))->with('danger', __('admin.not_delete_message'));
        }
        return redirect(route('vacancy.index'))->with('success', __('admin.delete_message'));
    }
}
