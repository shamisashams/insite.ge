{{-- extend layout --}}
@extends('admin.layout.contentLayoutMaster')
{{-- page title --}}
@section('title', $news->title)

@section('content')
    <!-- users view start -->
    <div class="card-panel">
        <div class="row">
            <div class="col s12 m7">
                <div class="display-flex media">
                    <div class="media-body">
                        <h6 class="media-heading">
                            <span class="users-view-name">{{$news->title}} </span>
                        </h6>
                    </div>
                </div>
            </div>
            <div class="col s12 m5 quick-action-btns display-flex justify-content-end align-items-center pt-2">
                <a href="{{route('news.edit',$news->id)}}" class="btn-small indigo">
                    @lang('admin.edit')
                </a>
                <a class="btn-small -settings waves-effect -light -btn right ml-3"
                   href="{{route('news.destroy',$news->id)}}"
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
                                @if($news->status)
                                    <span class="chip green lighten-5 green-text">@lang('admin.active')</span>
                                @else
                                    <span class="chip red lighten-5 red-text">@lang('admin.not_active')</span>
                                @endif
                            </td>
                        </tr>
                        <tr>
                            <td>@lang('admin.title'):</td>
                            <td>{{$news->title ?? ''}}</td>
                        </tr>
                        <tr>
                            <td>@lang('admin.description'):</td>
                            <td>{{$news->description ?? ''}}</td>
                        </tr>
                        <tr>
                            <td>@lang('admin.content'):</td>
                            <td>{!!$news->content ?? ''!!}</td>
                        </tr>
                        <tr>
                            <td>@lang('admin.location'):</td>
                            <td>{{$news->location ?? ''}}</td>
                        </tr>
                        <tr>
                            <td>@lang('admin.meta_title'):</td>
                            <td>{!!$news->meta_title ?? ''!!}</td>
                        </tr>
                        <tr>
                            <td>@lang('admin.meta_description'):</td>
                            <td>{!!$news->meta_description ?? ''!!}</td>
                        </tr>
                        <tr>
                            <td>@lang('admin.meta_keyword'):</td>
                            <td>{!!$news->meta_keyword ?? ''!!}</td>
                        </tr>
                        <tr>
                            <td>@lang('admin.created_at')</td>
                            <td>{{\Carbon\Carbon::parse($news->created_at)}}</td>
                        </tr>
                        <tr>
                            <td>@lang('admin.updated_at')</td>
                            <td>{{\Carbon\Carbon::parse($news->updated_at)}}</td>
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
                        @if($news->mainFile)
                            <div class="col s12 m6 l4 xl2">
                                <div>
                                    <a href="{{asset($news->mainFile->path.'/'.$news->mainFile->title)}}"
                                       target="_blank" title="$file->title">
                                        <img src="{{asset($news->mainFile->path.'/'.$news->mainFile->title)}}"
                                             class="responsive-img mb-10" alt="">
                                    </a>
                                </div>
                            </div>
                        @endif
                        @foreach($news->files as $file)
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


