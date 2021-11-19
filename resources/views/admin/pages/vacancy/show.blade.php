{{-- extend layout --}}
@extends('admin.layout.contentLayoutMaster')
{{-- page title --}}
@section('title', $vacancy->title)



@section('content')
    <!-- users view start -->
    <div class="card-panel">
        <div class="row">
            <div class="col s12 m7">
                <div class="display-flex media">
                    <div class="media-body">
                        <h6 class="media-heading">
                            <span class="users-view-name">{{$vacancy->title}} </span>
                        </h6>
                    </div>
                </div>
            </div>
            <div class="col s12 m5 quick-action-btns display-flex justify-content-end align-items-center pt-2">
                <a href="{{locale_route('vacancy.edit',$vacancy->id)}}" class="btn-small indigo">
                    @lang('admin.edit')
                </a>
                <a class="btn-small -settings waves-effect -light -btn right ml-3"
                   href="{{locale_route('vacancy.destroy',$vacancy->id)}}"
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
                            <td>@lang('admin.status'):</td>
                            <td>
                                @if($vacancy->status)
                                    <span class="chip green lighten-5 green-text">@lang('admin.active')</span>
                                @else
                                    <span class="chip red lighten-5 red-text">@lang('admin.not_active')</span>
                                @endif
                            </td>
                        </tr>
                        <tr>
                            <td>@lang('admin.title'):</td>
                            <td>{{$vacancy->title ?? ''}}</td>
                        </tr>
                        <tr>
                            <td>@lang('admin.description'):</td>
                            <td>{{$vacancy->description ?? ''}}</td>
                        </tr>
                        <tr>
                            <td>@lang('admin.content'):</td>
                            <td>{!!$vacancy->content ?? ''!!}</td>
                        </tr>
                        <tr>
                            <td>@lang('admin.field'):</td>
                            <td>{!!$vacancy->field ?? ''!!}</td>
                        </tr>
                        <tr>
                            <td>@lang('admin.experience'):</td>
                            <td>{!!$vacancy->experience ?? ''!!}</td>
                        </tr>
                        <tr>
                            <td>@lang('admin.location'):</td>
                            <td>{!!$vacancy->location ?? ''!!}</td>
                        </tr>
                        <tr>
                            <td>@lang('admin.commitment'):</td>
                            <td>{!!$vacancy->commitment ?? ''!!}</td>
                        </tr>

                        <tr>
                            <td>@lang('admin.salary'):</td>
                            <td>{!!$vacancy->salary ?? ''!!}</td>
                        </tr>

                        <tr>
                            <td>@lang('admin.meta_title'):</td>
                            <td>{!!$vacancy->meta_title ?? ''!!}</td>
                        </tr>
                        <tr>
                            <td>@lang('admin.meta_description'):</td>
                            <td>{!!$vacancy->meta_description ?? ''!!}</td>
                        </tr>
                        <tr>
                            <td>@lang('admin.meta_keyword'):</td>
                            <td>{!!$vacancy->meta_keyword ?? ''!!}</td>
                        </tr>

                        <tr>
                            <td>@lang('admin.created_at')</td>
                            <td>{{\Carbon\Carbon::parse($vacancy->created_at)}}</td>
                        </tr>
                        <tr>
                            <td>@lang('admin.updated_at')</td>
                            <td>{{\Carbon\Carbon::parse($vacancy->updated_at)}}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    {{--    <div class="section">--}}
    {{--        <div class="section">--}}
    {{--            <div class="masonry-gallery-wrapper">--}}
    {{--                <div class="popup-gallery">--}}
    {{--                    <div class="gallery-sizer"></div>--}}
    {{--                    <div class="row">--}}
    {{--                        @if($blog ?? ''->mainFile)--}}
    {{--                            <div class="col s12 m6 l4 xl2">--}}
    {{--                                <div>--}}
    {{--                                    <a href="{{asset($blog ?? ''->mainFile->path.'/'.$blog ?? ''->mainFile->title)}}"--}}
    {{--                                       target="_blank" title="$file->title">--}}
    {{--                                        <img src="{{asset($blog ?? ''->mainFile->path.'/'.$blog ?? ''->mainFile->title)}}"--}}
    {{--                                             class="responsive-img mb-10" alt="">--}}
    {{--                                    </a>--}}
    {{--                                </div>--}}
    {{--                            </div>--}}
    {{--                        @endif--}}
    {{--                        @foreach($blog ?? ''->files as $file)--}}
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


