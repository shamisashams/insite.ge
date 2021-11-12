{{-- extend layout --}}
@extends('admin.layout.contentLayoutMaster')
{{-- page title --}}
@section('title', $answer->title)



@section('content')
    <!-- users view start -->
    <div class="card-panel">
        <div class="row">
            <div class="col s12 m7">
                <div class="display-flex media">
                    <div class="media-body">
                        <h6 class="media-heading">
                            <span class="users-view-name">{{$answer->title}} </span>
                        </h6>
                    </div>
                </div>
            </div>
            <div class="col s12 m5 quick-action-btns display-flex justify-content-end align-items-center pt-2">
                <a href="{{route('answer.edit',$answer->id)}}" class="btn-small indigo">
                    Edit
                </a>
                <a class="btn-small -settings waves-effect -light -btn right ml-3"
                   href="{{route('answer.destroy',$answer->id)}}"
                   onclick="return confirm('Are you sure?')">
                    <span class="hide-on-small-onl">
                        Delete
                    </span>
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
                            <td>Status</td>
                            <td>
                                @if($answer->status)
                                    <span class="chip green lighten-5 green-text">Active</span>
                                @else
                                    <span class="chip red lighten-5 red-text">Not Active</span>
                                @endif
                            </td>
                        </tr>
                        <tr>
                            <td>Title:</td>
                            <td>{{$answer->title ?? ''}}</td>
                        </tr>
                        <tr>
                            <td>Start Price:</td>
                            <td>{{$answer->start_price}}</td>
                        </tr>
                        <tr>
                            <td>End Price:</td>
                            <td>{{$answer->end_price}}</td>
                        </tr>
                        <tr>
                            <td>Start Time:</td>
                            <td>{{$answer->start_time}}</td>
                        </tr>
                        <tr>
                            <td>End Time:</td>
                            <td>{{$answer->end_time}}</td>
                        </tr>
                        <tr>
                            <td>Feature:</td>
                            <td>{{$answer->feature?$answer->feature->feature->title:""}}</td>
                        </tr>

                        {{--                        <tr>--}}
                        {{--                            <td>Feature:</td>--}}
                        {{--                            <td>{{$answer->feature->feature->title ?? ''}}</td>--}}
                        {{--                        </tr>--}}
                        <tr>
                            <td>Created At</td>
                            <td>{{\Carbon\Carbon::parse($answer->created_at)}}</td>
                        </tr>
                        <tr>
                            <td>Updated At')</td>
                            <td>{{\Carbon\Carbon::parse($answer->updated_at)}}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div class="section">
        <div class="section">
            <div class="masonry-gallery-wrapper">
                <div class="popup-gallery">
                    <div class="gallery-sizer"></div>
                    <div class="row">
                        @if($answer->mainFile)
                            <div class="col s12 m6 l4 xl2">
                                <div>
                                    <a href="{{asset($answer->mainFile->path.'/'.$answer->mainFile->title)}}"
                                       target="_blank" title="$file->title">
                                        <img src="{{asset($answer->mainFile->path.'/'.$answer->mainFile->title)}}"
                                             class="responsive-img mb-10" alt="">
                                    </a>
                                </div>
                            </div>
                        @endif
                        @foreach($answer->files as $file)
                            <div class="col s12 m6 l4 xl2">
                                <div>
                                    <a href="{{asset($file->path.'/'.$file->title)}}" target="_blank"
                                       title="$file->title">
                                        <img src="{{asset($file->path.'/'.$file->title)}}" class="responsive-img mb-10"
                                             alt="">
                                    </a>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection


