{{-- extend layout --}}
@extends('admin.layout.contentLayoutMaster')
{{-- page title --}}
@section('title', $answer->id ? __('admin.answer-update') : 'admin.answer-create')

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
                <div class="card-content animate fadeLeft">
                    <input name="old-images[]" id="old_images" hidden disabled value="{{$answer->files}}">
                    <h4 class="card-title">{{$answer->id ? 'Answer Update' : 'Answer Create'}}</h4>
                    {!! Form::model($answer,['url' => $url, 'method' => $method,'files' => true]) !!}
                    {!! Form::text('old_main_image',$answer->mainFile,['hidden','id'=>'old-main']) !!}

                    <div class="row">
                        <div class="col s12 m6 8">
                            <div class="row">
                                <div class="col s12 mb-3">
                                    <div class="input-field ">
                                        {!! Form::text('title',$answer->title ?? '',['class' => 'validate '. $errors->has('title') ? '' : 'valid']) !!}
                                        {!! Form::label('title','Title') !!}
                                        @error('title')
                                        <small class="errorTxt4">
                                            <div class="error">
                                                {{$message}}
                                            </div>
                                        </small>
                                        @enderror
                                    </div>
                                    <div class="input-field ">
                                        {!! Form::number('start_price',$answer->start_price ?? '',['class' => 'validate '. $errors->has('start_price') ? '' : 'valid']) !!}
                                        {!! Form::label('start_price','Start Price') !!}
                                        @error('start_price')
                                        <small class="errorTxt4">
                                            <div class="error">
                                                {{$message}}
                                            </div>
                                        </small>
                                        @enderror
                                    </div>
                                    <div class="input-field ">
                                        {!! Form::number('end_price',$answer->end_price ?? '',['class' => 'validate '. $errors->has('end_price') ? '' : 'valid']) !!}
                                        {!! Form::label('end_price','End Price') !!}
                                        @error('end_price')
                                        <small class="errorTxt4">
                                            <div class="error">
                                                {{$message}}
                                            </div>
                                        </small>
                                        @enderror
                                    </div>
                                    <div class="input-field ">
                                        {!! Form::number('start_time',$answer->start_time ?? '',['class' => 'validate '. $errors->has('start_time') ? '' : 'valid']) !!}
                                        {!! Form::label('start_time','Start Time') !!}
                                        @error('start_time')
                                        <small class="errorTxt4">
                                            <div class="error">
                                                {{$message}}
                                            </div>
                                        </small>
                                        @enderror
                                    </div>
                                    <div class="input-field ">
                                        {!! Form::number('end_time',$answer->end_time ?? '',['class' => 'validate '. $errors->has('end_time') ? '' : 'valid']) !!}
                                        {!! Form::label('end_time','End Time') !!}
                                        @error('end_time')
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

                                <div class="input-field col s12">

                                    <select name="feature" class="select2 js-example-programmatic browser-default">
                                        @foreach($features as $feature )
                                            <option {{($answer->feature && $answer->feature->feature_id == $feature->id) ? 'selected' : ''}} value="{{$feature->id}}">{{$feature->title}}</option>
                                        @endforeach
                                    </select>

                                    <label class="active" for="category_id">Feature</label>

                                    @error('feature')
                                    <small class="errorTxt4">
                                        <div class="error">
                                            {{$message}}
                                        </div>
                                    </small>
                                    @enderror
                                </div>

                                <div class="col s12 mt-3 mb-3">
                                    <label>
                                        <input type="checkbox" name="status"
                                               value="true" {{$answer->status ? 'checked' : ''}}>
                                        <span>Status</span>
                                    </label>
                                </div>
                            </div>

                            {{--                            <div class="row">--}}
                            {{--                                <div class="col s12 mt-3 mb-3">--}}
                            {{--                                    <div class="input-field ">--}}
                            {{--                                        {!! Form::text($locale.'[title]',$answer->translate($locale)->title ?? '',['class' => 'validate '. $errors->has($locale.'.title') ? '' : 'valid']) !!}--}}
                            {{--                                        {!! Form::label($locale.'[title]',__('admin.title')) !!}--}}
                            {{--                                        @error($locale.'.title')--}}
                            {{--                                        <small class="errorTxt4">--}}
                            {{--                                            <div class="error">--}}
                            {{--                                                {{$message}}--}}
                            {{--                                            </div>--}}
                            {{--                                        </small>--}}
                            {{--                                        @enderror--}}
                            {{--                                    </div>--}}
                            {{--                                </div>--}}
                            {{--                            </div>--}}
                            <label>Main Image</label>
                            <div class="form-group">
                                <input name="main-image" type="file" id="input-file-now" class="dropify"
                                       data-default-file="{{$answer->mainFile?asset($feature->answer->path.'/'.$answer->mainFile->title):""}}"/>
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
                            {!! Form::submit($answer->created_at ?'Update' : 'Create',['class' => 'btn cyan waves-effect waves-light ']) !!}
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
    <script src="{{asset('js/scripts/form-file-uploads.js?v='.time())}}"></script>

@endsection
