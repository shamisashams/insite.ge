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
use App\Http\Requests\Admin\VacancyRequestRequest;
use App\Repositories\VacancyRepositoryInterface;
use App\Repositories\VacancyRequestRepositoryInterface;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Routing\Redirector;
use Illuminate\Support\Arr;
use ReflectionException;

class VacancyRequestController extends Controller
{
    /**
     * @var VacancyRequestRepositoryInterface
     */
    private $vacancyRequestRepository;

    /**
     * @param VacancyRequestRepositoryInterface $vacancyRequestRepository
     */
    public function __construct(VacancyRequestRepositoryInterface $vacancyRequestRepository)
    {
        $this->vacancyRequestRepository = $vacancyRequestRepository;

    }

    /**
     * Display a listing of the resource.
     *
     * @return Application|Factory|View
     */
    public function index(Request $request)
    {

        return view('admin.pages.vacancyRequest.index', [
            'vacancyRequests' => $this->vacancyRequestRepository->getData($request,['vacancy'])
        ]);
    }

//    /**
//     * Show the form for creating a new resource.
//     *
//     * @return Application|Factory|View
//     */
//    public function create()
//    {
//        $vacancyRequest = $this->vacancyRequestRepository->model;
//
//        $url = route('vacancyRequest.store', [], false);
//        $method = 'POST';
//
//        return view('admin.pages.vacancyRequest.form', [
//            'vacancyRequest' => $vacancyRequest,
//            'url' => $url,
//            'method' => $method,
//        ]);
//    }

//    /**
//     * Store a newly created resource in storage.
//     *
//     * @param VacancyRequestRequest $request
//     *
//     * @return Application|RedirectResponse|Redirector
//     * @throws ReflectionException
//     */
//    public function store(VacancyRequestRequest $request)
//    {
//        $saveData = Arr::except($request->except('_token'), []);
//        $saveData['status'] = isset($saveData['status']) && (bool)$saveData['status'];
//
//        $vacancyRequest = $this->vacancyRequestRepository->create($saveData);
//
//        // Save Files
//        if ($request->hasFile('images') || $request->hasFile('main-image')) {
//            $vacancyRequest = $this->vacancyRequestRepository->saveFiles($vacancyRequest->id, $request);
//        }
//
//        return redirect(route('vacancyRequest.show', $vacancyRequest->id))->with('success', __('admin.create_successfully'));
//
//    }

    /**
     * Display the specified resource.
     *
     * @param VacancyRequestRequest $project
     *
     * @return Application|Factory|View
     */
    public function show(\App\Models\VacancyRequest $vacancyRequest)
    {
        return view('admin.pages.vacancyRequest.show', [
            'vacancyRequest' => $vacancyRequest,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param VacancyRequestRequest $vacancyRequest
     * @return Application|Factory|View
     */
    public function edit(\App\Models\VacancyRequest $vacancyRequest)
    {
        $url = route('vacancyRequest.update', $vacancyRequest->id);
        $method = 'PUT';

        return view('admin.pages.vacancyRequest.form', [
            'vacancyRequest' => $vacancyRequest,
            'url' => $url,
            'method' => $method,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param VacancyRequest $request
     * @param \App\Models\VacancyRequest $vacancyRequest
     * @return Application|RedirectResponse|Redirector
     * @throws ReflectionException
     */
    public function update(VacancyRequestRequest $request,\App\Models\VacancyRequest $vacancyRequest)
    {
        $saveData = Arr::except($request->except('_token'), []);
        $saveData['status'] = isset($saveData['status']) && (bool)$saveData['status'];

        $this->vacancyRequestRepository->update($vacancyRequest->id, $saveData);


        $this->vacancyRequestRepository->saveFiles($vacancyRequest->id, $request);


        return redirect(route('vacancyRequest.show', $vacancyRequest->id))->with('success', __('admin.update_successfully'));
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param \App\Models\VacancyRequest $vacancyRequest
     * @return Application|RedirectResponse|Redirector
     */
    public function destroy(\App\Models\VacancyRequest $vacancyRequest)
    {
        if (!$this->vacancyRequestRepository->delete($vacancyRequest->id)) {
            return redirect(route('blo.show', $vacancyRequest->id))->with('danger', __('admin.not_delete_message'));
        }
        return redirect(route('vacancyRequest.index'))->with('success', __('admin.delete_message'));
    }
}
