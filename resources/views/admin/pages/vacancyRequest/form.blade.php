{{-- extend layout --}}
@extends('admin.layout.contentLayoutMaster')
{{-- page title --}}
@section('title', $vacancyRequest->id ? __('admin.vacancyRequest-update') : 'admin.vacancyRequest-create')

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
                <div class="card-content">
                    <input name="old-images[]" id="old_images" hidden disabled value="{{$vacancyRequest->files}}">
                    <h4 class="card-title">{{$vacancyRequest->id ? __('admin.vacancyRequest-update') : __('admin.vacancyRequest-create')}}</h4>
                    {!! Form::model($vacancyRequest,['url' => $url, 'method' => $method,'files' => true]) !!}
                    {!! Form::text('old_main_image',$vacancyRequest->mainFile,['hidden','id'=>'old-main']) !!}

                    <div class="row">
                        <div class="col s12 m6 8">
                            <div class="row">
                                <div class="col s12 mt-3 mb-3">
                                    <div class="input-field ">
                                        {!! Form::text('full_name',$vacancyRequest->full_name ?? '',['class' => 'validate '. $errors->has('full_name') ? '' : 'valid']) !!}
                                        {!! Form::label('full_name',__('admin.full_name')) !!}
                                        @error('full_name')
                                        <small class="errorTxt4">
                                            <div class="error">
                                                {{$message}}
                                            </div>
                                        </small>
                                        @enderror
                                    </div>
                                    <div class="input-field ">
                                        {!! Form::text('email',$vacancyRequest->email ?? '',['class' => 'validate '. $errors->has('email') ? '' : 'valid']) !!}
                                        {!! Form::label('email',__('admin.email')) !!}
                                        @error('email')
                                        <small class="errorTxt4">
                                            <div class="error">
                                                {{$message}}
                                            </div>
                                        </small>
                                        @enderror
                                    </div>
                                    <div class="input-field ">
                                        {!! Form::text('phone',$vacancyRequest->phone ?? '',['class' => 'validate '. $errors->has('phone') ? '' : 'valid']) !!}
                                        {!! Form::label('phone',__('admin.phone')) !!}
                                        @error('phone')
                                        <small class="errorTxt4">
                                            <div class="error">
                                                {{$message}}
                                            </div>
                                        </small>
                                        @enderror
                                    </div>
                                    <div class="input-field ">
                                        {!! Form::text('portfolio_link',$vacancyRequest->portfolio_link ?? '',['class' => 'validate '. $errors->has('portfolio_link') ? '' : 'valid']) !!}
                                        {!! Form::label('portfolio_link',__('admin.portfolio_link')) !!}
                                        @error('portfolio_link')
                                        <small class="errorTxt4">
                                            <div class="error">
                                                {{$message}}
                                            </div>
                                        </small>
                                        @enderror
                                    </div>
                                    <label>{{__('client.main_image')}}</label>
                                    <div class="form-group">
                                        <input name="main-image" type="file" id="input-file-now" class="dropify"
                                               data-default-file="{{$vacancyRequest->mainFile?asset($vacancyRequest->mainFile->path.'/'.$vacancyRequest->mainFile->title):""}}"/>
                                        @if ($errors->has('main-image'))
                                            <span class="help-block">
                                            {{ $errors->first('main-image') }}
                                        </span>
                                        @endif
                                    </div>
                                </div>


                            </div>
                        </div>
                        <div class="col s12 m6 8">
                            <div class="row">

                                {{--                                <div class="input-field"></div>--}}

                                {{--                                <div class="col s12 mt-3 mb-3">--}}
                                {{--                                    <label>--}}
                                {{--                                        <input type="checkbox" name="status"--}}
                                {{--                                               value="true" {{$vacancy->status ? 'checked' : ''}}>--}}
                                {{--                                        <span>{{__('admin.status')}}</span>--}}
                                {{--                                    </label>--}}
                                {{--                                </div>--}}
                            </div>
                            {{--                            <label>{{__('client.main_image')}}</label>--}}
                            {{--                            <div class="form-group">--}}
                            {{--                                <input name="main-image" type="file" id="input-file-now" class="dropify"--}}
                            {{--                                       data-default-file="{{$vacancy->mainFile?asset($vacancy->mainFile->path.'/'.$vacancy->mainFile->title):""}}"/>--}}
                            {{--                                @if ($errors->has('main-image'))--}}
                            {{--                                    <span class="help-block">--}}
                            {{--                                            {{ $errors->first('main-image') }}--}}
                            {{--                                        </span>--}}
                            {{--                                @endif--}}
                            {{--                            </div>--}}
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s12">
                            {!! Form::submit($vacancyRequest->created_at ? __('admin.update') : __('admin.create'),['class' => 'btn cyan waves-effect waves-light ']) !!}
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


    </script>
    <script src="{{asset('js/scripts/form-file-uploads.js?v='.time())}}"></script>

@endsection
