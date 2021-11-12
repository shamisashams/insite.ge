{{-- extend layout --}}
@extends('admin.layout.contentLayoutMaster')
{{-- page title --}}
@section('title', $setting->value)



@section('content')
    <!-- users view start -->
    <div class="card-panel">
        <div class="row">
            <div class="col s12 m7">
                <div class="display-flex media">
                    <div class="media-body">
                        <h6 class="media-heading">
                            <span class="users-view-name">{{$setting->value}} </span>
                        </h6>
                    </div>
                </div>
            </div>
            <div class="col s12 m5 quick-action-btns display-flex justify-content-end align-items-center pt-2">
                <a href="{{locale_route('setting.edit',$setting->id)}}" class="btn-small indigo">
                    @lang('admin.edit')
                </a>
            </div>
        </div>
    </div>
    <div class="card">
        <div class="card-content">
            <div class="row">
                <div class="col s12 m4">
                    <table class="striped">
                        <tbody>
                        <tr>
                            <td>@lang('admin.key'):</td>
                            <td>
                                {{$setting->key}}
                            </td>
                        </tr>
                        <tr>
                            <td>@lang('admin.value'):</td>
                            <td>
                                {{$setting->value}}
                            </td>
                        </tr>
                        <tr>
                            <td>@lang('admin.created_at')</td>
                            <td>{{\Carbon\Carbon::parse($setting->created_at)}}</td>
                        </tr>
                        <tr>
                            <td>@lang('admin.updated_at')</td>
                            <td>{{\Carbon\Carbon::parse($setting->updated_at)}}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

@endsection


