{{-- extend layout --}}
@extends('admin.layout.contentLayoutMaster')

{{-- page title --}}
@section('title','Feature')


@section('content')
    <div class="row">
        <div class="col s12 m12 l12">
            <div id="button-trigger" class="card card card-default scrollspy">

                <div class="card-content animate fadeLeft">
                    <a class="btn-floating btn-large primary-text gradient-shadow compose-email-trigger "
                       href="{{route('answer.create')}}">
                        <i class="material-icons">add</i>
                    </a>
                    <h4 class="card-title mt-2">Answer</h4>
                    <div class="row">
                        <div class="col s12">
                            <form class="mr-0 p-0">
                                <table id="data-table-simple" class="display">
                                    <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Status</th>
                                        <th>Title</th>
                                        <th>Start Price</th>
                                        <th>End Price</th>
                                        <th>Start Time</th>
                                        <th>End Time</th>
                                        <th>Actions</th>
                                    </tr>
                                    </thead>
                                    <tr>
                                        <th>
                                            <input type="number" name="id" onchange="this.form.submit()"
                                                   value="{{Request::get('id')}}"
                                                   class="validate {{$errors->has('id') ? '' : 'valid'}}">
                                        </th>
                                        <th>
                                            <select class="form-control" name="status" onchange="this.form.submit()">
                                                <option
                                                    value="" {{Request::get('status') === '' ? 'selected' :''}}>Any</option>
                                                <option
                                                    value="1" {{Request::get('status') === '1' ? 'selected' :''}}>Active</option>
                                                <option
                                                    value="0" {{Request::get('status') === '0' ? 'selected' :''}}>Not Active</option>
                                            </select>
                                        </th>
                                        <th>
                                            <input type="text" name="title" onchange="this.form.submit()"
                                                   value="{{Request::get('title')}}"
                                                   class="validate {{$errors->has('title') ? '' : 'valid'}}">
                                        </th>
                                        <th>
                                            <input type="number" name="startPrice" onchange="this.form.submit()"
                                                   value="{{Request::get('startPrice')}}"
                                                   class="validate {{$errors->has('startPrice') ? '' : 'valid'}}">
                                        </th>
                                        <th>
                                            <input type="number" name="endPrice" onchange="this.form.submit()"
                                                   value="{{Request::get('endPrice')}}"
                                                   class="validate {{$errors->has('endPrice') ? '' : 'valid'}}">
                                        </th>
                                        <th>
                                            <input type="number" name="startTime" onchange="this.form.submit()"
                                                   value="{{Request::get('startTime')}}"
                                                   class="validate {{$errors->has('startTime') ? '' : 'valid'}}">
                                        </th>
                                        <th>
                                            <input type="text" name="endTime" onchange="this.form.submit()"
                                                   value="{{Request::get('endTime')}}"
                                                   class="validate {{$errors->has('endTime') ? '' : 'valid'}}">
                                        </th>
                                        <th></th>
                                    </tr>
                                    <tbody>
                                    @if($answers)
                                        @foreach($answers as $answer)
                                            <tr>
                                                <td>{{$answer->id}}</td>
                                                <td>
                                                    @if($answer->status)
                                                        <span class="green-text">Active</span>
                                                    @else
                                                        <span class="red-text">Not Active</span>
                                                    @endif
                                                </td>
                                                <td>
                                                    {{$answer->title ?? ''}}

                                                </td>

                                                <td>
                                                    {{$answer->start_price}}
                                                </td>

                                                <td>
                                                    {{$answer->end_price}}
                                                </td>

                                                <td>
                                                    {{$answer->start_time}}
                                                </td>

                                                <td>
                                                    {{$answer->end_time}}
                                                </td>
                                                <td>
                                                    <a href="{{route('answer.show',$answer->id)}}">
                                                        <i class="material-icons">remove_red_eye</i>
                                                    </a>
                                                    <a href="{{route('answer.edit',$answer->id)}}"
                                                       class="pl-3">
                                                        <i class="material-icons">edit</i>
                                                    </a>
                                                    <a href="{{route('answer.destroy',$answer->id)}}"
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
                            {{ $answers->appends(request()->input())->links('admin.vendor.pagination.material') }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection


