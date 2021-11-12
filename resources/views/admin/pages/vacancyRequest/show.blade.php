{{-- extend layout --}}
@extends('admin.layout.contentLayoutMaster')
{{-- page title --}}
@section('title', $vacancyRequest->title)



@section('content')
    <!-- users view start -->
    <div class="card-panel">
        <div class="row">
            <div class="col s12 m7">
                <div class="display-flex media">
                    <div class="media-body">
                        <h6 class="media-heading">
                            <span class="users-view-name">{{$vacancyRequest->full_name}} </span>
                        </h6>
                    </div>
                </div>
            </div>
            <div class="col s12 m5 quick-action-btns display-flex justify-content-end align-items-center pt-2">
                <a href="{{route('vacancyRequest.edit',$vacancyRequest->id)}}" class="btn-small indigo">
                    @lang('admin.edit')
                </a>
                <a class="btn-small -settings waves-effect -light -btn right ml-3"
                   href="{{route('vacancyRequest.destroy',$vacancyRequest->id)}}"
                   onclick="return confirm('Are you sure?')">
                    <span class="hide-on-small-onl">
                        @lang('admin.delete')
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
                            <td>@lang('admin.full_name'):</td>
                            <td>
                                {{$vacancyRequest->full_name}}
                            </td>
                        </tr>
                        <tr>
                            <td>@lang('admin.email'):</td>
                            <td>
                                {{$vacancyRequest->email}}
                            </td>
                        </tr>
                        <tr>
                            <td>@lang('admin.phone'):</td>
                            <td>
                                {{$vacancyRequest->phone}}
                            </td>
                        </tr>
                        <tr>
                            <td>@lang('admin.portfolio_link'):</td>
                            <td>
                                {{$vacancyRequest->portfolio_link}}
                            </td>
                        </tr>
                        <tr>
                            <td>@lang('admin.created_at')</td>
                            <td>{{\Carbon\Carbon::parse($vacancyRequest->created_at)}}</td>
                        </tr>
                        <tr>
                            <td>@lang('admin.updated_at')</td>
                            <td>{{\Carbon\Carbon::parse($vacancyRequest->updated_at)}}</td>
                        </tr>
                        </tbody>
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
            {{--                    @foreach(config('translatable.locales') as $locale)--}}
            {{--                            <div id="cat-{{$locale}}"--}}
            {{--                                 class="">--}}
            {{--                                <table class="striped">--}}
            {{--                                    <tbody>--}}
            {{--                                    <tr>--}}
            {{--                                        <td>@lang('admin.title'):</td>--}}
            {{--                                        <td>{{$vacancy->translate($locale)->title ?? ''}}</td>--}}
            {{--                                    </tr>--}}
            {{--                                    <tr>--}}
            {{--                                        <td>@lang('admin.description'):</td>--}}
            {{--                                        <td>{{$vacancy->translate($locale)->description ?? ''}}</td>--}}
            {{--                                    </tr>--}}
            {{--                                    <tr>--}}
            {{--                                        <td>@lang('admin.content'):</td>--}}
            {{--                                        <td>{!!$vacancy->translate($locale)->content ?? ''!!}</td>--}}
            {{--                                    </tr>--}}
            {{--                                    <tr>--}}
            {{--                                        <td>@lang('admin.field'):</td>--}}
            {{--                                        <td>{!!$vacancy->translate($locale)->field ?? ''!!}</td>--}}
            {{--                                    </tr>--}}
            {{--                                    <tr>--}}
            {{--                                        <td>@lang('admin.experience'):</td>--}}
            {{--                                        <td>{!!$vacancy->translate($locale)->experience ?? ''!!}</td>--}}
            {{--                                    </tr>--}}
            {{--                                    <tr>--}}
            {{--                                        <td>@lang('admin.location'):</td>--}}
            {{--                                        <td>{!!$vacancy->translate($locale)->location ?? ''!!}</td>--}}
            {{--                                    </tr>--}}
            {{--                                    <tr>--}}
            {{--                                        <td>@lang('admin.commitment'):</td>--}}
            {{--                                        <td>{!!$vacancy->translate($locale)->commitment ?? ''!!}</td>--}}
            {{--                                    </tr>--}}

            {{--                                    <tr>--}}
            {{--                                        <td>@lang('admin.salary'):</td>--}}
            {{--                                        <td>{!!$vacancy->translate($locale)->salary ?? ''!!}</td>--}}
            {{--                                    </tr>--}}

            {{--                                    </tbody>--}}
            {{--                                </table>--}}
            {{--                            </div>--}}
            {{--                    @endforeach--}}
            {{--                </div>--}}
            {{--            </div>--}}
        </div>
    </div>

    <div class="section">
        <div class="section">
            <div class="masonry-gallery-wrapper">
                <div class="popup-gallery">
                    <div class="gallery-sizer"></div>
                    <div class="card">
                        <div class="card-content">
                            <div class="row">
                                @if($vacancyRequest->mainFile)
                                    <div class="col s12 m6 l4 xl2">
                                        <div>
                                            <a href="{{asset($vacancyRequest->mainFile->path.'/'.$vacancyRequest->mainFile->title)}}"
                                               target="_blank" title="$file->title">
                                                @if($vacancyRequest->mainFile->format=='jpg'||$vacancyRequest->mainFile->format=='png' || $vacancyRequest->mainFile->format=='svg')
                                                    <img
                                                        src="{{asset($vacancyRequest->mainFile->path.'/'.$vacancyRequest->mainFile->title)}}"
                                                        class="responsive-img mb-10"
                                                        alt="">
                                                @else
                                                    <p>{{$vacancyRequest->mainFile->title}}</p>
                                                @endif
                                            </a>
                                        </div>
                                    </div>
                                @endif
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection


