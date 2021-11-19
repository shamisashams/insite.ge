{{-- extend layout --}}
@extends('admin.layout.contentLayoutMaster')
{{-- page title --}}
@section('title', $blog->id ? __('admin.blog-update') : 'admin.blog-create')

@section('vendor-style')
    <link rel="stylesheet" type="text/css" href="{{asset('vendors/select2/select2.min.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('vendors/select2/select2-materialize.css')}}">
@endsection
{{-- page style --}}
@section('page-style')
    <link rel="stylesheet" type="text/css" href="{{asset('css/pages/form-select2.css')}}">
    <link rel="stylesheet" type="text/css" href="{{asset('vendors/dropify/css/dropify.min.css')}}">
@endsection

@section('content')
    <div class="row">
        <div class="col s12 m12 12">
            <div id="basic-form" class="card card card-default scrollspy">
                <div class="card-content animate fadeUp">
                    <input name="old-images[]" id="old_images" hidden disabled value="{{$blog->files}}">
                    <h4 class="card-title">{{$blog->id ? __('admin.blog-update') : __('admin.blog-create')}}</h4>
                    {!! Form::model($blog,['url' => $url, 'method' => $method,'files' => true]) !!}
                    {!! Form::text('old_main_image',$blog->mainFile,['hidden','id'=>'old-main']) !!}

                    <div class="row">
                        <div class="col s12 m6 8">
                            <div class="row">
                                <div class="col s12">
                                    <div class="input-field ">
                                        {!! Form::text('title',$blog->title ?? '',['class' => 'validate '. $errors->has('title') ? '' : 'valid']) !!}
                                        {!! Form::label('title',__('admin.title')) !!}
                                        @error('title')
                                        <small class="errorTxt4">
                                            <div class="error">
                                                {{$message}}
                                            </div>
                                        </small>
                                        @enderror
                                    </div>
                                    <div class="input-field ">
                                        {!! Form::text('description',$blog->description ?? '',['class' => 'validate '. $errors->has('description') ? '' : 'valid']) !!}
                                        {!! Form::label('description',__('admin.description')) !!}
                                        @error('description')
                                        <small class="errorTxt4">
                                            <div class="error">
                                                {{$message}}
                                            </div>
                                        </small>
                                        @enderror
                                    </div>

                                    <div class="input-field">
                                        <h5 for="content">@lang('admin.content')</h5>
                                        {!! Form::textarea('content',$blog->content ?? '',['class' => 'form-control validate '. ($errors->has('content') ? '' : 'valid'),'id'=>'content']) !!}
                                        @error('content')
                                        <small class="errorTxt4">
                                            <div class="error">
                                                {{$message}}
                                            </div>
                                        </small>
                                        @enderror
                                    </div>
                                    <div class="input-field ">
                                        {!! Form::text('meta_title',$blog->meta_title ?? '',['class' => 'validate '. $errors->has('meta_title') ? '' : 'valid']) !!}
                                        {!! Form::label('meta_title',__('admin.meta_title')) !!}
                                        @error('meta_title')
                                        <small class="errorTxt4">
                                            <div class="error">
                                                {{$message}}
                                            </div>
                                        </small>
                                        @enderror
                                    </div>
                                    <div class="input-field ">
                                        {!! Form::text('meta_description',$blog->meta_description ?? '',['class' => 'validate '. $errors->has('meta_description') ? '' : 'valid']) !!}
                                        {!! Form::label('meta_description',__('admin.meta_description')) !!}
                                        @error('meta_description')
                                        <small class="errorTxt4">
                                            <div class="error">
                                                {{$message}}
                                            </div>
                                        </small>
                                        @enderror
                                    </div>
                                    <div class="input-field">
                                        {!! Form::text('meta_keyword',$blog->meta_keyword ?? '',['class' => 'validate '. $errors->has('meta_keyword') ? '' : 'valid']) !!}
                                        {!! Form::label('meta_keyword',__('admin.meta_keyword')) !!}
                                        @error('meta_keyword')
                                        <small class="errorTxt4">
                                            <div class="error">
                                                {{$message}}
                                            </div>
                                        </small>
                                        @enderror
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col s12 m6 8">
                            <div class="row">

                                <div class="input-field"></div>

                                <div class="col s12 mt-3 mb-3">
                                    <label>
                                        <input type="checkbox" name="status"
                                               value="true" {{$blog->status ? 'checked' : ''}}>
                                        <span>{{__('admin.status')}}</span>
                                    </label>
                                </div>
                            </div>
                            <label>{{__('admin.main_image')}}</label>
                            <div class="form-group">
                                <input name="main-image" type="file" id="input-file-now" class="dropify"
                                       data-default-file="{{$blog->mainFile?asset($blog->mainFile->path.'/'.$blog->mainFile->title):""}}"/>
                                @if ($errors->has('main-image'))
                                    <span class="help-block">
                                            {{ $errors->first('main-image') }}
                                        </span>
                                @endif
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            {!! Form::submit($blog->created_at ? __('admin.update') : __('admin.create'),['class' => 'btn cyan waves-effect waves-light ']) !!}
                        </div>
                    </div>
                    {!! Form::close() !!}


                </div>
            </div>
        </div>
    </div>

@endsection

{{-- vendor script --}}
@section('vendor-script')
    <script src="{{asset('vendors/select2/select2.full.min.js')}}"></script>
    <script src="{{asset('vendors/dropify/js/dropify.min.js')}}"></script>
@endsection

{{-- page script --}}
@section('page-script')
    <script src="{{asset('js/scripts/form-select2.js')}}"></script>

    <script src="{{ asset('ckeditor/ckeditor.js') }}"></script>
    <script>
        CKEDITOR.replace('content', {
            filebrowserUploadUrl: "{{route('upload', ['_token' => csrf_token(),'type'=>'blog'])}}",
            filebrowserUploadMethod: 'form',
        });

    </script>
    <script src="{{asset('js/scripts/form-file-uploads.js?v='.time())}}"></script>

@endsection
