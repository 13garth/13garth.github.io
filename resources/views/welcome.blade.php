<!DOCTYPE html>
@include('layouts.site_header')
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>G Portfolio</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
</head>
<style>
    .info-box {
        position: relative;
    }

    .floating-back-icon {
        color: #7bc7ff;
        position: absolute;
        width: max-content;
        padding: 0;
        text-shadow: 1px 1px 5px #00696e;
        font-size: 75px;
        top: 15px;
        right: -250px;
        transition: right 0.5s ease;
    }

    .cta-heading {
        text-shadow: -0.5px 0.5px 3px #000;
        color: #fff;
        font-weight: bold;
    }

    .overflow-sizing {
        max-height: 100vh;
        overflow-y: auto;
    }
</style>

<body class="antialiased" id="welcome-background-image" style="min-height: 100vh;">
    <div class="overflow-sizing">
        @if (Route::has('login'))
            <div class="row col-12 mx-auto justify-content-center">
                <div class="row col-auto mx-auto py-3 justify-content-center">
                    @auth
                        <a href="{{ url('/home') }}" style="width: 150px;"
                            class="text-center glass glass-hover rainbow-box-shadow-keyframe mb-2 col-auto p-3 mx-3"><span
                                style="text-shadow: 0px 0px 15px #000;">Home</span>
                        </a>
                    @else
                        <a href="{{ route('login') }}" style="width: 150px;"
                            class="text-center glass glass-hover rainbow-box-shadow-keyframe mb-2 col-auto p-3 mx-3"><span
                                style="text-shadow: 0px 0px 15px #000;">Log in</span>
                        </a>
                        @if (Route::has('register'))
                            <a href="{{ route('register') }}" style="width: 150px;"
                                class="text-center glass glass-hover rainbow-box-shadow-keyframe mb-2 col-auto p-3 mx-3"><span
                                    style="text-shadow: 0px 0px 15px #000;">Register</span>
                            </a>
                        @endif
                    @endauth
                </div>
            </div>
        @endif
        <div class="row col-12 mx-auto p-0 text-center mb-3">
            <div class="dark-blue-transparent-background rounded card text-white col-auto mx-auto">
                Laravel v{{ Illuminate\Foundation\Application::VERSION }} (PHP v{{ PHP_VERSION }})
            </div>
        </div>
        <div class="container backdrop-blur dark-blue-transparent-background py-3 rounded mb-5 border border-light text-white">
            <div class="row col-md-12 mx-auto text-center">
                <h3>Garth Baker CV & Contact Info</h3>
                <br>
                <small>Please take the time to go through this. I understand CV's are a pain. But I took a lot of time to sum this up.</small>
                <hr class="my-2">
            </div>
            <div class="row col-md-12 mx-auto">
                <div class="col-md-4">
                    <i class="fa fa-envelope"></i> Email | <i class="fa fa-phone"></i> Cell
                    <hr class="my-2">
                    <a class="text-light" href="mailto:13garthbaker@gmail.com" target="_blank">13garthbaker@gmail.com</a>
                    <br>
                    <a class="text-light" href="tel:+31684002167" target="_blank">(+31 / 0) 68 400 2167</a>
                </div>
                <div class="col-md-4">
                    <i class="fa-brands fa-github"></i> Github
                    <hr class="my-2">
                    <a class="text-light" href="https://github.com/13garth" target="_blank">https://github.com/13garth</a>
                </div>
                <div class="col-md-4">
                    <i class="fa-brands fa-linkedin"></i> Linkedin
                    <hr class="my-2">
                    <a class="text-light" href="https://www.linkedin.com/in/13garth/" target="_blank">https://www.linkedin.com/in/13garth</a>
                </div>
            </div>
        </div>
        <div class="container backdrop-blur dark-blue-transparent-background py-3 rounded mb-5 border border-light">
            @include('modals.technical_knowledge')
        </div>
        <div class="container backdrop-blur dark-blue-transparent-background py-3 rounded mb-5 border border-light">
            @include('modals.problem_solving')
        </div>
    </div>
</body>

<script>
    $(document).ready(function() {
        $('.info-box').hover(
            function() {
                $(this).find('.floating-back-icon').css('right', '25px');
            },
            function() {
                $(this).find('.floating-back-icon').css('right', '-250px');
            }
        );
    });
</script>

</html>
