{{-- extend layout --}}
@extends('admin.layout.contentLayoutMaster')
{{-- page title --}}
@section('title', $project->id)



@section('content')
    <!-- users view start -->
    <div class="card-panel animate fadeUp">
        <div class="row">
            <div class="col s12 m7">
                <div class="display-flex media">
                    <div class="media-body">
                        <h6 class="media-heading">
                            <span class="users-view-name">{{$project->title}} </span>
                        </h6>
                    </div>
                </div>
            </div>
            <div class="col s12 m5 quick-action-btns display-flex justify-content-end align-items-center pt-2">
                <a class="btn-small -settings waves-effect -light -btn right ml-3"
                   href="{{locale_route('project.destroy',$project->id)}}"
                   onclick="return confirm('Are you sure?')">
                    <span class="hide-on-small-onl">
                        @lang('admin.delete')
                    </span>
                </a>
            </div>
        </div>
    </div>
    <div class="card animate fadeUp">
        <div class="card-content">
            <div class="row mystyle">
                <div class="">
                    <table class="cost_table">
                        @foreach($project->projectRequest as $projectRequest)

                            <tr>
                                <th rowspan="{{2+count($projectRequest->answers($projectRequest->answer))}}">{{$projectRequest->feature->title}}</th>
                            </tr>
                            @foreach($projectRequest->answers($projectRequest->answer) as $answer)
                                <tr>
                                    <td>
                                        {{$answer->title}}
                                    </td>
                                    <td>${{$answer->start_price}}- ${{$answer->end_price}}</td>
                                    <td>{{$answer->start_time}}h {{$answer->end_time}}h</td>
                                </tr>
                            @endforeach
                            <tr class="comment">
                                <td>
                                    <div class="flex cm">
                                        <img src="/images/calculator/cm.svg" alt=""/>
                                        <span>Comment</span>
                                    </div>
                                    {{$projectRequest->comment}}
                                </td>
                            </tr>
                            <tr class="border"></tr>
                        <!-- <tr>
                            <td>@lang('admin.toal_price'):</td>
                            <td>
                                {{$project->total_price}}
                            </td>
                        </tr>
                        <tr>
                            <td>@lang('admin.total_price'):</td>
                            <td>
                                {{$project->time}}
                            </td>
                        </tr>
                        <tr>
                            <td>@lang('admin.created_at')</td>
                            <td>{{\Carbon\Carbon::parse($project->created_at)}}</td>
                        </tr>
                        <tr>
                            <td>@lang('admin.updated_at')</td>
                            <td>{{\Carbon\Carbon::parse($project->updated_at)}}</td>
                        </tr> -->
                        @endforeach
                    </table>
                </div>
            </div>

            {{--            <div class="row mt-2">--}}
            {{--                <div class="col s12">--}}
            {{--                    <ul class="tabs">--}}
            {{--                        @foreach(config('translatable.locales') as $locale)--}}
            {{--                            <li class="tab">--}}
            {{--                                <a href="#cat-{{$locale}}">--}}
            {{--                                    {{$locale}}--}}
            {{--                                </a>--}}
            {{--                            </li>--}}
            {{--                        @endforeach--}}
            {{--                    </ul>--}}
            {{--                </div>--}}
            {{--                <div class="col sm12 mt-2">--}}
            {{--                    <table class="striped">--}}
            {{--                        <tbody>--}}
            {{--                        <tr>--}}
            {{--                            <td>@lang('admin.total_price'):</td>--}}
            {{--                            <td>{{$project->total_price ?? ''}}</td>--}}
            {{--                        </tr>--}}
            {{--                        <tr>--}}
            {{--                            <td>@lang('admin.time'):</td>--}}
            {{--                            <td>{{$project->time ?? ''}}</td>--}}
            {{--                        </tr>--}}
            {{--                        </tbody>--}}
            {{--                    </table>--}}
            {{--                </div>--}}
            {{--            </div>--}}
        </div>
    </div>

    {{--    <div class="section">--}}
    {{--        <div class="section">--}}
    {{--            <div class="masonry-gallery-wrapper">--}}
    {{--                <div class="popup-gallery">--}}
    {{--                    <div class="gallery-sizer"></div>--}}
    {{--                    <div class="row">--}}
    {{--                        @foreach($project->files as $file)--}}
    {{--                            <div class="col s12 m6 l4 xl2">--}}
    {{--                                <div>--}}
    {{--                                    <a href="{{asset($file->path.'/'.$file->title)}}" target="_blank"--}}
    {{--                                       title="$file->title">--}}
    {{--                                        <img src="{{asset($file->path.'/'.$file->title)}}" class="responsive-img mb-10"--}}
    {{--                                             alt="">--}}
    {{--                                    </a>--}}
    {{--                                </div>--}}
    {{--                            </div>--}}
    {{--                        @endforeach--}}
    {{--                    </div>--}}
    {{--                </div>--}}
    {{--            </div>--}}
    {{--        </div>--}}
    {{--    </div>--}}
@endsection

