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
use App\Http\Requests\Admin\FeatureRequest;
use App\Http\Requests\Admin\ProjectRequest;
use App\Models\Feature;
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

class FeatureController extends Controller
{
    /**
     * @var ProjectRepositoryInterface
     */
    private $featureRepository;

    /**
     * @param FeatureRepositoryInterface $featureRepository
     */
    public function __construct(FeatureRepositoryInterface $featureRepository)
    {
        $this->featureRepository = $featureRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return Application|Factory|View
     */
    public function index(Request $request)
    {

        return view('admin.pages.feature.index', [
            'features' => $this->featureRepository->getData($request)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Application|Factory|View
     */
    public function create()
    {
        $feature = $this->featureRepository->model;

        $url = route('feature.store');
        $method = 'POST';

        return view('admin.pages.feature.form', [
            'feature' => $feature,
            'url' => $url,
            'method' => $method,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param ProjectRequest $request
     *
     * @return Application|RedirectResponse|Redirector
     * @throws ReflectionException
     */
    public function store(FeatureRequest $request)
    {
        $saveData = Arr::except($request->except('_token'), []);
        $saveData['status'] = isset($saveData['status']) && (bool)$saveData['status'];

        $feature = $this->featureRepository->create($saveData);

        // Save Files
        if ($request->hasFile('images')) {
            $feature = $this->featureRepository->saveFiles($feature->id, $request);
        }

        return redirect(route('feature.show', $feature->id))->with('success', __('admin.create_successfully'));

    }

    /**
     * Display the specified resource.
     *
     * @param Feature $feature
     *
     * @return Application|Factory|View
     */
    public function show(Feature $feature)
    {
        return view('admin.pages.feature.show', [
            'feature' => $feature
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Feature $feature
     * @return Application|Factory|View
     */
    public function edit(Feature $feature)
    {
        $url = route('feature.update', $feature->id);
        $method = 'PUT';

        return view('admin.pages.feature.form', [
            'feature' => $feature,
            'url' => $url,
            'method' => $method,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param FeatureRequest $request
     * @param Feature $feature
     * @return Application|RedirectResponse|Redirector
     * @throws ReflectionException
     */
    public function update(FeatureRequest $request,Feature $feature)
    {
        $saveData = Arr::except($request->except('_token'), []);
        $saveData['status'] = isset($saveData['status']) && (bool)$saveData['status'];

        $this->featureRepository->update($feature->id, $saveData);


        $this->featureRepository->saveFiles($feature->id, $request);


        return redirect(route('feature.show', $feature->id))->with('success', __('admin.update_successfully'));
    }

    /**
     * Remove the specified resource from storage.
     * @param Feature $feature
     * @return Application|RedirectResponse|Redirector
     */
    public function destroy( Feature $feature)
    {
        if (!$this->featureRepository->delete($feature->id)) {
            return redirect(route('feature.show', $feature->id))->with('danger', __('admin.not_delete_message'));
        }
        return redirect(route('feature.index'))->with('success', __('admin.delete_message'));
    }
}
