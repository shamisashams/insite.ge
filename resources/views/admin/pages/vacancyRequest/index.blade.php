{{-- extend layout --}}
@extends('admin.layout.contentLayoutMaster')

{{-- page title --}}
@section('title',__('admin.vacancyRequest'))


@section('content')
    <div class="row">
        <div class="col s12 m12 l12">
            <div id="button-trigger" class="card card card-default scrollspy">

                <div class="card-content">
{{--                    <a class="btn-floating btn-large primary-text gradient-shadow compose-email-trigger "--}}
{{--                       href="{{route('vacancyRequest.create')}}">--}}
{{--                        <i class="material-icons">add</i>--}}
{{--                    </a>--}}
                    <h4 class="card-title mt-2">@lang('admin.vacancyRequest')</h4>
                    <div class="row">
                        <div class="col s12">
                            <form class="mr-0 p-0">
                                <table id="data-table-simple" class="display">
                                    <thead>
                                    <tr>
                                        <th>@lang('admin.id')</th>
                                        <th>@lang('admin.vacancy_name')</th>
                                        <th>@lang('admin.full_name')</th>
                                        <th>@lang('admin.email')</th>
                                        <th>@lang('admin.portfolio_link')</th>
                                        <th>@lang('admin.created_at')</th>
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
                                            <input type="text" name="vacancy_title" onchange="this.form.submit()"
                                                   value="{{Request::get('vacancy_title')}}"
                                                   class="validate {{$errors->has('vacancy_title') ? '' : 'valid'}}">
                                        </th>
                                        <th>
                                            <input type="text" name="full_name" onchange="this.form.submit()"
                                                   value="{{Request::get('full_name')}}"
                                                   class="validate {{$errors->has('full_name') ? '' : 'valid'}}">
                                        </th>
                                        <th>
                                            <input type="text" name="email" onchange="this.form.submit()"
                                                   value="{{Request::get('email')}}"
                                                   class="validate {{$errors->has('email') ? '' : 'valid'}}">
                                        </th>
                                        <th>
                                        </th>

                                        <th></th>
                                    </tr>
                                    <tbody>
                                    @if($vacancyRequests)
                                        @foreach($vacancyRequests as $vacancyRequest)
                                            <tr>
                                                <td>{{$vacancyRequest->id}}</td>
                                                <td>{{$vacancyRequest->vacancy->title}}</td>
                                                <td>{{$vacancyRequest->full_name}}</td>
                                                <td>{{$vacancyRequest->email}}</td>
                                                <td>
                                                    <a href="{{$vacancyRequest->portfolio_link}}">
                                                        {{__('client.portfolio_link')}}
                                                    </a>
                                                </td>

                                                <td>
                                                    {{\Carbon\Carbon::createFromFormat('Y-m-d H:i:s',$vacancyRequest->created_at)->format('d/M/Y H:i:s')}}
                                                </td>
                                                <td>
                                                    <a href="{{route('vacancyRequest.show',$vacancyRequest->id)}}">
                                                        <i class="material-icons">remove_red_eye</i>
                                                    </a>
                                                    <a href="{{route('vacancyRequest.edit',$vacancyRequest->id)}}"
                                                       class="pl-3">
                                                        <i class="material-icons">edit</i>
                                                    </a>
                                                    <a href="{{route('vacancyRequest.destroy',$vacancyRequest->id)}}"
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
                            {{ $vacancyRequests->appends(request()->input())->links('admin.vendor.pagination.material') }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection


