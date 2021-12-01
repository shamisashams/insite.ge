<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>PDF</title>
    <style>
        /* general */
        @font-face {
            font-family: "extra-bold";
            src: url(/fonts/FuturaPTExtraBold.otf);
        }
        @font-face {
            font-family: "bold";
            src: url(/fonts/FuturaPTBold.otf);
        }
        @font-face {
            font-family: "medium";
            src: url(/fonts/FuturaPTMedium.otf);
        }
        @font-face {
            font-family: "book";
            src: url(/fonts/FuturaPTBook.otf);
        }
        @font-face {
            font-family: "light";
            src: url(/fonts/FuturaPTLight.otf);
        }
        @font-face {
            font-family: "gilroy-extra";
            src: url(/fonts/Gilroy-ExtraBold.otf);
        }
        @font-face {
            font-family: "DejaVu Sans";
            font-style: normal;
            font-weight: 400;
            src: url(/fonts/DejaVuSans.ttf);
            src: local("DejaVu Sans"),
            local("DejaVu Sans"),
            url(/fonts/DejaVuSans.ttf) format("truetype");
        }
        *,
        *::after,
        *::before {
            margin: 0;
            padding: 0;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            /*font-family: "medium";*/
            scroll-behavior: smooth;
        }
        *::after,
        *::before {
            position: absolute;
            content: "";
        }
        /* width */
        ::-webkit-scrollbar {
            width: 7px;
        }
        /* Track */
        ::-webkit-scrollbar-track {
            background: #272639;
        }
        /* Handle */
        ::-webkit-scrollbar-thumb {
            background: #e81748b6;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #e81748;
        }
        html {
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
        }
        body {
            font-family: "DejaVu Sans";
            /*font-weight: 400;*/
            line-height: 1.3;
            color: #272639;
            background: #fff;
            overflow-x: hidden;
            scroll-behavior: smooth;
            font-size: 14px;
            position: relative;
        }
        p {
            font-weight: 100;
            /*font-family: "book";*/
            text-align: justify;
        }
        .wrapper {
            width: 800px;
            margin: auto;
            position: relative;
            padding: 60px 0;
        }
        .flex {
            display: flex;
            align-items: center;
            justify-content: flex-start;
        }
        .flex.center {
            justify-content: center;
        }
        .op06 {
            opacity: 0.6;
        }
        .head {
            position: relative;
            margin-bottom: 30px;
        }
        .head::before {
            left: -10px;
            top: 10px;
            /*transform: translateY(-50%);*/
            width: 3px;
            height: 55px;
            background-color: rgb(22, 65, 129);
        }
        .head::after {
            left: -16px;
            top: 10px;
            /*transform: translateY(-50%);*/
            width: 3px;
            height: 55px;
            background-color: rgb(22, 65, 129);
        }
        .head h3 {
            color: rgb(22, 65, 129);
            margin-bottom: 2px;
            font-size: 25px;
            font-weight: normal;
        }
        .head h6 {
            color: rgb(0, 88, 139);
            font-size: 18px;
        }
        .overview {
            font-weight: bold;
            margin-bottom: 20px;
            font-size: 20px;
            color: rgb(0, 56, 139);
        }
        .title {
            color: rgb(0, 88, 139);
            font-size: 18px;
            margin-bottom: 10px;
        }
        table {
            border-collapse: collapse;
            width: 100%;
            margin-bottom: 30px;
        }
        table td, table th {
            border: 1px solid rgb(13, 135, 216);
            padding: 3px 20px;
            /*font-family: 'book';*/
        }
        table th {
            text-align: left;
            background: rgba(56, 166, 209, 0.158);
        }
        .cm_box {
            background: rgba(113, 174, 245, 0.226);
            padding: 15px 50px;
            color: rgba(73, 73, 73, 0.87);
            margin-bottom: 50px;
        }
        .cm_box .flex {
            position: relative;
            margin-bottom: 10px;
        }
        .cm_box .flex img {
            position: absolute;
            left: -30px;
            top: -3px;
        }
        .estimate {
            border-top: 1px solid #272639;
            padding-top: 20px;
            margin-top: 70px;
            margin-bottom: 60px;
        }
        i {
            color: #2726399c;
        }
        .bg {
            position: absolute;
            top: 50%;
            left: 50%;
            z-index: -1;
            opacity: 0.05;
            transform: translate(-50%, -50%) rotate(-45deg);
            width: 1000px;
        }
        /*===============Responsiveness=================*/
        @media screen and (max-width: 850px) {
            .wrapper {
                width: 95%;
            }
            .bg {
                width: 90%;
            }
        }
    </style>
</head>
<body>
<img class="bg" src="img/main.svg" alt="">
<div class="wrapper">
    <div class="head">
        <h3>თქვენი პროექტის შეფასება</h3>
        <h6>{{\Carbon\Carbon::now()}}</h6>
    </div>
    <div class="overview">აღწერა</div>
    @foreach($features as $feature)
        <div class="title">{{$loop->index+1}}. {{$feature['title']}}</div>
        <table>
            @foreach($feature['answer'] as $answer)
                <tr>
                    <td>{{$answer['title']}}</td>
                    <td><span style="font-size: 16px">GEL</span>{{$answer['start_price']}} - <span
                            style="font-size: 16px">GEL</span>{{$answer['end_price']}}</td>
                    <td>{{$answer['start_time']}} - {{$answer['end_time']}}</td>
                </tr>
            @endforeach
        </table>
        <div class="cm_box">
            <div class="flex">
                <img src="img/i.png" alt="">
                <span>თქვენი კომენტარი:</span>
            </div>
            <p>{{$feature['comment']}} </p>
        </div>
    @endforeach

    <div class="estimate">
        <table>
            <tr>
                <th>მიახლოებითი ღიერებულება</th>
                <th>მიახლოებითი დრო</th>
            </tr>
            <tr>
                <td><span style="font-size: 16px">GEL</span>{{$totalStartPrice}} - <span
                        style="font-size: 16px">GEL</span>{{$totalEndPrice}}</td>
                <td>{{$totalTime}}სთ</td>
            </tr>
        </table>
    </div>
    <i><b>გთხოვთ გაითვალისწინოთ რომ ეს კალკულაცია არის მიახლოებით. ფასი და დრო შეიძლება შეიცვალოს თქვენი მოთხოვნებიდან გამომდინარე.</b></i>
</div>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>PDF</title>
    <style>
        /* general */
        @font-face {
            font-family: "extra-bold";
            src: url(/fonts/FuturaPTExtraBold.otf);
        }
        @font-face {
            font-family: "bold";
            src: url(/fonts/FuturaPTBold.otf);
        }
        @font-face {
            font-family: "medium";
            src: url(/fonts/FuturaPTMedium.otf);
        }
        @font-face {
            font-family: "book";
            src: url(/fonts/FuturaPTBook.otf);
        }
        @font-face {
            font-family: "light";
            src: url(/fonts/FuturaPTLight.otf);
        }
        @font-face {
            font-family: "gilroy-extra";
            src: url(/fonts/Gilroy-ExtraBold.otf);
        }
        @font-face {
            font-family: "DejaVu Sans";
            font-style: normal;
            font-weight: 400;
            src: url(/fonts/DejaVuSans.ttf);
            src: local("DejaVu Sans"),
            local("DejaVu Sans"),
            url(/fonts/DejaVuSans.ttf) format("truetype");
        }
        *,
        *::after,
        *::before {
            margin: 0;
            padding: 0;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            /*font-family: "medium";*/
            scroll-behavior: smooth;
        }
        *::after,
        *::before {
            position: absolute;
            content: "";
        }
        /* width */
        ::-webkit-scrollbar {
            width: 7px;
        }
        /* Track */
        ::-webkit-scrollbar-track {
            background: #272639;
        }
        /* Handle */
        ::-webkit-scrollbar-thumb {
            background: #e81748b6;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #e81748;
        }
        html {
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
        }
        body {
            font-family: "DejaVu Sans";
            /*font-weight: 400;*/
            line-height: 1.3;
            color: #272639;
            background: #fff;
            overflow-x: hidden;
            scroll-behavior: smooth;
            font-size: 14px;
            position: relative;
        }
        p {
            font-weight: 100;
            /*font-family: "book";*/
            text-align: justify;
        }
        .wrapper {
            width: 800px;
            margin: auto;
            position: relative;
            padding: 60px 0;
        }
        .flex {
            display: flex;
            align-items: center;
            justify-content: flex-start;
        }
        .flex.center {
            justify-content: center;
        }
        .op06 {
            opacity: 0.6;
        }
        .head {
            position: relative;
            margin-bottom: 30px;
        }
        .head::before {
            left: -10px;
            top: 10px;
            /*transform: translateY(-50%);*/
            width: 3px;
            height: 55px;
            background-color: rgb(22, 65, 129);
        }
        .head::after {
            left: -16px;
            top: 10px;
            /*transform: translateY(-50%);*/
            width: 3px;
            height: 55px;
            background-color: rgb(22, 65, 129);
        }
        .head h3 {
            color: rgb(22, 65, 129);
            margin-bottom: 2px;
            font-size: 25px;
            font-weight: normal;
        }
        .head h6 {
            color: rgb(0, 88, 139);
            font-size: 18px;
        }
        .overview {
            font-weight: bold;
            margin-bottom: 20px;
            font-size: 20px;
            color: rgb(0, 56, 139);
        }
        .title {
            color: rgb(0, 88, 139);
            font-size: 18px;
            margin-bottom: 10px;
        }
        table {
            border-collapse: collapse;
            width: 100%;
            margin-bottom: 30px;
        }
        table td, table th {
            border: 1px solid rgb(13, 135, 216);
            padding: 3px 20px;
            /*font-family: 'book';*/
        }
        table th {
            text-align: left;
            background: rgba(56, 166, 209, 0.158);
        }
        .cm_box {
            background: rgba(113, 174, 245, 0.226);
            padding: 15px 50px;
            color: rgba(73, 73, 73, 0.87);
            margin-bottom: 50px;
        }
        .cm_box .flex {
            position: relative;
            margin-bottom: 10px;
        }
        .cm_box .flex img {
            position: absolute;
            left: -30px;
            top: -3px;
        }
        .estimate {
            border-top: 1px solid #272639;
            padding-top: 20px;
            margin-top: 70px;
            margin-bottom: 60px;
        }
        i {
            color: #2726399c;
        }
        .bg {
            position: absolute;
            top: 50%;
            left: 50%;
            z-index: -1;
            opacity: 0.05;
            transform: translate(-50%, -50%) rotate(-45deg);
            width: 1000px;
        }
        /*===============Responsiveness=================*/
        @media screen and (max-width: 850px) {
            .wrapper {
                width: 95%;
            }
            .bg {
                width: 90%;
            }
        }
    </style>
</head>
<body>
<img class="bg" src="img/main.svg" alt="">
<div class="wrapper">
    <div class="head">
        <h3>პროექტის აღწერა</h3>
        <h6>{{\Carbon\Carbon::now()}}</h6>
    </div>
    <div class="overview">აღწერა</div>
    @foreach($features as $feature)
        <div class="title">{{$loop->index+1}}. {{$feature['title']}}</div>
        <table>
            @foreach($feature['answer'] as $answer)
                <tr>
                    <td>{{$answer['title']}}</td>
                    <td><span style="font-size: 16px">GEL</span>{{$answer['start_price']}} - <span
                            style="font-size: 16px">GEL</span>{{$answer['end_price']}}</td>
                    <td>{{$answer['start_time']}} - {{$answer['end_time']}}</td>
                </tr>
            @endforeach
        </table>
        <div class="cm_box">
            <div class="flex">
                <img src="img/i.png" alt="">
                <span>თქვენი კომენტარი</span>
            </div>
            <p>{{$feature['comment']}} </p>
        </div>
    @endforeach

    <div class="estimate">
        <table>
            <tr>
                <th>მიახლოებითი ღიერებულება</th>
                <th>მიახლოებითი დრო</th>
            </tr>
            <tr>
                <td><span style="font-size: 16px">GEL</span>{{$totalStartPrice}} - <span
                        style="font-size: 16px">GEL</span>{{$totalEndPrice}}</td>
                <td>{{$totalTime}}სთ</td>
            </tr>
        </table>
    </div>
    <i><b>გთხოვთ გაითვალისწინოთ რომ ეს კალკულაცია არის მიახლოებით. ფასი და დრო შეიძლება შეიცვალოს თქვენი მოთხოვნებიდან გამომდინარე.</b></i>
</div>
</body>
</html>
