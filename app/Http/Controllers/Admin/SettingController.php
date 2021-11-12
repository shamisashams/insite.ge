<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\SettingRequest;
use App\Models\Setting;
use App\Repositories\SettingRepositoryInterface;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Routing\Redirector;
use Illuminate\Support\Arr;

class SettingController extends Controller
{
    /**
     * @var SettingRepositoryInterface
     */
    private $settingRepository;


    /**
     * @param SettingRepositoryInterface $settingRepository
     */
    public function __construct(
        SettingRepositoryInterface  $settingRepository
    )
    {
        $this->settingRepository = $settingRepository;
    }


    /**
     * @param SettingRequest $request
     * @return Application|Factory|View
     */
    public function index(SettingRequest $request)
    {
        return view('admin.pages.setting.index', [
            'settings' => $this->settingRepository->getData($request)
        ]);
    }


    /**
     * @param Setting $setting
     * @return Application|Factory|View
     */
    public function show(Setting $setting)
    {
        return view('admin.pages.setting.show', [
            'setting' => $setting,
        ]);
    }


    /**
     * @param Setting $setting
     * @return Application|Factory|View
     */
    public function edit(Setting $setting)
    {
        $url = route('setting.update', $setting->id);
        $method = 'PUT';

        return view('admin.pages.setting.form', [
            'setting' => $setting,
            'url' => $url,
            'method' => $method,
        ]);
    }


    /**
     * @param SettingRequest $request
     * @param Setting $setting
     * @return Application|RedirectResponse|Redirector
     */
    public function update(SettingRequest $request, Setting $setting)
    {
        $saveData = Arr::except($request->except('_token'), []);
        $this->settingRepository->update($setting->id,$saveData);


        return redirect(route('setting.show', $setting->id))->with('success', __('admin.update_successfully'));
    }
}
