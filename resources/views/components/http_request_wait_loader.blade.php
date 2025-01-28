<div id="preloader" style="display: none;">
    <div class="loader">Loading...</div>
</div>
<style>
    #preloader {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ffffffcc;
        z-index: 99998;
        height: 100%;
    }

    @keyframes colorCycle {
        0% {
            color: #1280e6;
            border-color: #1280e6;
        }

        20% {
            color: #0aa581;
            border-color: #0aa581;
        }

        40% {
            color: #a12a2a;
            border-color: #a12a2a;
        }

        60% {
            color: #0d00a4;
            border-color: #0d00a4;
        }

        80% {
            color: #0e6824;
            border-color: #0e6824;
        }

        100% {
            color: #1280e6;
            border-color: #1280e6;
        }
    }

    @keyframes backgroundColorCycle {
        0% {
            background: #1280e6;
        }

        20% {
            background: #0aa581;
        }

        40% {
            background: #a12a2a;
        }

        60% {
            background: #0d00a4;
        }

        80% {
            background: #0e6824;
        }

        100% {
            background: #1280e6;
        }
    }
    .loader {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-content: center;
        background: #fff;
        border: 1px solid;
        box-shadow: -10px 10px 0px;
        width: 250px;
        height: 60px;
        line-height: 50px;
        text-align: center;
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        font-family: helvetica, arial, sans-serif;
        text-transform: uppercase;
        font-weight: 900;
        animation: colorCycle 7s infinite;
        letter-spacing: 0.2em;
    }

    .loader::before,
    .loader::after {
        content: "";
        display: block;
        width: 15px;
        height: 15px;
        position: absolute;
        -webkit-animation: load .7s infinite alternate ease-in-out;
        animation: backgroundColorCycle 7s infinite, load .7s infinite alternate ease-in-out;
    }

    .loader::before {
        top: 0;
    }

    .loader::after {
        bottom: 0;
    }

    @-webkit-keyframes load {
        0% {
            left: 0;
            height: 30px;
            width: 15px;
        }

        50% {
            height: 8px;
            width: 40px;
        }

        100% {
            left: 235px;
            height: 30px;
            width: 15px;
        }
    }

    @keyframes load {
        0% {
            left: 0;
            height: 30px;
            width: 15px;
        }

        50% {
            height: 8px;
            width: 40px;
        }

        100% {
            left: 235px;
            height: 30px;
            width: 15px;
        }
    }
</style>
