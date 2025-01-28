<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="theme-color" content="#5dacbd" />
    <title>{{ config('app.name', 'G Portfolio') }}</title>
    {{-- Fonts --}}
    <link rel="dns-prefetch" href="//fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=Nunito" rel="stylesheet">
    <!-- Favicon -->
    <link rel="icon" href="{{ URL::asset('assets/logo.png') }}" type="image/x-icon"/>
    <!-- Link Icon -->
    <meta property="og:image" content="{{ URL::asset('assets/logo.png') }}"/>
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- Styles & JS -->
    <link rel="stylesheet" href="{{ asset('app.css') }}">
    <script type="text/javascript" src="{{ asset('app.js') }}"></script>

    {{-- Font Awesome --}}
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
        integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/js/all.min.js" async></script>
    {{-- Recaptcha --}}
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
    <!-- Google Analytics - Google tag (gtag.js) -->
    {{-- <script async src="https://www.googletagmanager.com/gtag/js?id=G-E7QPR2KN7V"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'G-E7QPR2KN7V');
    </script> --}}
</head>
@include('components/http_request_wait_loader')
