{{-- extend layout --}}
@extends('admin.layout.contentLayoutMaster')

{{-- page title --}}
@section('title',__('admin.project'))


@section('content')
    <div class="row">
        <div class="col s12 m12 l12">
            <div id="button-trigger" class="card card card-default scrollspy">

                <div class="card-content animate fadeLeft">
                    {{--                    <a class="btn-floating btn-large primary-text gradient-shadow compose-email-trigger "--}}
                    {{--                       href="{{route('project.create')}}">--}}
                    {{--                        <i class="material-icons">add</i>--}}
                    {{--                    </a>--}}
                    <h4 class="card-title mt-2">@lang('admin.project')</h4>
                    <div class="row">
                        <div class="col s12">
                            <form class="mr-0 p-0">
                                <table id="data-table-simple" class="display">
                                    <thead>
                                    <tr>
                                        <th>@lang('admin.id')</th>
                                        <th>@lang('admin.total_price')</th>
                                        <th>@lang('admin.time')</th>
                                        <th>@lang('admin.actions')</th>
                                    </tr>
                                    </thead>
                                    <tr>
                                        <th>
                                            <input type="number" name="id" onchange="this.form.submit()"
                                                   value="{{Request::get('id')}}"
                                                   class="validate {{$errors->has('id') ? '' : 'valid'}}">
                                        </th>
                                        <th>
                                            <input type="number" name="totalPrice" onchange="this.form.submit()"
                                                   value="{{Request::get('totalPrice')}}"
                                                   class="validate {{$errors->has('totalPrice') ? '' : 'valid'}}">
                                        </th>
                                        <th>
                                            <input type="text" name="time" onchange="this.form.submit()"
                                                   value="{{Request::get('time')}}"
                                                   class="validate {{$errors->has('time') ? '' : 'valid'}}">
                                        </th>
                                        <th></th>
                                    </tr>
                                    <tbody>
                                    @if($projects)
                                        @foreach($projects as $project)
                                            <tr>
                                                <td>{{$project->id}}</td>
                                                <td>
                                                    {{$project->total_price ?? ''}}

                                                </td>
                                                <td>
                                                    {{$project->time}}
                                                </td>
                                                <td>
                                                    <a href="{{route('project.show',$project->id)}}">
                                                        <i class="material-icons">remove_red_eye</i>
                                                    </a>
                                                    @if($project->pdf)
                                                        <a href="{{route('project.download-pdf',$project->id)}}">
                                                            <i class="material-icons">cloud_download</i>
                                                        </a>
                                                    @endif
                                                    <a href="{{route('project.destroy',$project->id)}}"
                                                       onclick="return confirm('Are you sure?')" class="pl-3">
                                                        <i class="material-icons">delete</i>
                                                    </a>
                                                </td>
                                            </tr>
                                        @endforeach
                                    @endif
                                    </tbody>
                                </table>
                            </form>
                            {{ $projects->appends(request()->input())->links('admin.vendor.pagination.material') }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection


