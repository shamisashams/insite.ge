<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-F2Q491PWP8"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-F2Q491PWP8');
</script>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="csrf-token" content="{{ csrf_token() }}">
{{--    <title>@yield("meta_title", "Insite International")</title>--}}
{{--    <meta name="description"--}}
{{--          content="@yield("meta_description", "Insite International description")">--}}
{{--    <meta name="keywords" content="@yield("meta_keywords", "Insite International keywords")">--}}
    @yield('head')

</head>
<body>
@yield('body')
</body>
</html>
