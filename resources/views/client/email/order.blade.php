<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Insite-ის კალკულაცია</title>
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
            src: url(fonts/FuturaPTBook.otf);
        }

        @font-face {
            font-family: "light";
            src: url(/fonts/FuturaPTLight.otf);
        }

        @font-face {
            font-family: "gilroy-extra";
            src: url(/fonts/Gilroy-ExtraBold.otf);
        }

        *,
        *::after,
        *::before {
            margin: 0;
            padding: 0;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            font-family: "medium";
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
            font-family: "medium";
            font-weight: 400;
            line-height: 1.3;
            color: #272639;
            background: #fff;
            overflow-x: hidden;
            scroll-behavior: smooth;
            font-size: 16px;
            background: url(/img/bg.png) no-repeat;
            background-position: center;
            background-size: cover;
        }

        p {
            font-weight: 100;
            font-family: "book";
            text-align: justify;
        }

        h1 {
            font-weight: 600;
        }

        ul {
            list-style: none;
        }

        a {
            text-decoration: none;
            color: inherit;
        }

        input,
        textarea,
        button {
            outline: none;
            border: none;
            background: none;
        }

        button {
            cursor: pointer;
            border: none;
            background: none;
        }

        select {
            border: none;
            outline: none;
        }

        img {
            height: auto;
            max-width: 100%;
            -webkit-user-drag: none;
            user-select: none;
        }

        .wrapper {
            width: 1500px;
            height: 100%;
            margin: auto;
            position: relative;
        }

        .flex {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .flex.center {
            justify-content: center;
        }

        .op06 {
            opacity: 0.6;
        }

        .font70 {
            font-size: 70px;
            font-family: "bold";
        }

        .map iframe {
            width: 100%;
            height: 100%;
        }

        .img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        /*===============Responsiveness=================*/
        @media screen and (max-width: 1550px) {
            .wrapper {
                width: 95%;
            }
        }

        /* this page */
        .main_btn {
            width: 166px;
            height: 47px;
            background-color: #272639;
            color: #fff;
            position: relative;
            font-size: 18px;
            overflow: hidden;
        }

        .main_btn.large {
            width: 267px;
            height: 76px;
        }

        .main_btn span {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: 0.4s;
        }

        .main_btn .stationary {
            position: relative;
            right: 0;
        }

        .main_btn .hover {
            position: absolute;
            left: -100%;
            top: 0;
            background-color: #e81747;
        }

        .main_btn:hover .hover {
            left: 0;
        }

        .main_btn:hover .stationary {
            right: -100%;
        }

        .title1 {
            text-align: center;
        }

        .title1 .head {
            margin-bottom: 43px;
            position: relative;
            font-size: 45px;
            font-family: "bold";
        }

        .title1 .head::after {
            width: 60px;
            height: 2px;
            background-color: #e81747;
            bottom: -23px;
            left: 50%;
            transform: translateX(-50%);
            font-family: "bold";
        }

        .title1 p {
            max-width: 643px;
            margin: auto;
            font-size: 16px;
            text-align: center;
        }

        .result_page {
            padding: 60px 0;
            background-position: center !important;
            background-size: cover !important;
            background-repeat: no-repeat !important;
        }

        .result_page {
            width: 900px;
        }

        .result_page .title1 .head {
            margin-bottom: 18px;
            font-family: "medium";
        }

        .result_page .title1 .head::after {
            display: none;
        }

        .result_page table {
            width: 100%;
            border-collapse: collapse;
            margin: auto;
        }

        .result_page .cost_table {
            border-bottom: 1px solid #e9214f;
            margin-top: 50px;
            margin-bottom: 20px;
        }

        .result_page table td {
            font-family: "book";
            padding-top: 10px;
            padding-right: 20px;
        }

        .result_page .cost_table td {
            max-width: 260px;
        }

        .result_page .cost_table .cm {
            justify-content: flex-start;
            color: #e9214f;
        }

        .result_page .cost_table .cm img {
            margin-right: 5px;
        }

        .result_page .comment td {
            font-family: "light";
        }

        .result_page .cost_table .border {
            border-bottom: 1px dashed #e921504f;
            height: 10px;
        }

        .result_page .cost_table tr th {
            font-family: "bold";
            text-align: right;
            padding-right: 50px;
            padding-top: 9px;
            width: 30%;
            max-width: 200px;
        }

        .result_page table tr {
            vertical-align: top;
        }

        .result_page .cost_table tr:last-child {
            border-bottom: none;
        }

        .result_page .cost_table tr:last-child td {
            padding-bottom: 30px;
        }

        .result_page .result_table th {
            text-align: left;
            padding: 10px;
        }

        .result_page .result_table tr td:first-child {
            max-width: 600px;
        }

        .result_page .btm_btns {
            margin: 50px 0;
        }

        .result_page .btm_btns .main_btn {
            margin-left: 15px;
        }

        .result_page .main_btn:nth-child(2) .stationary {
            background-color: #e9214f;
        }

        .result_page .main_btn:nth-child(2) .hover {
            background-color: #272639;
        }

        .result_page .dl_pdf {
            font-size: 22px;
        }

        .result_page .dl_pdf img {
            margin-right: 6px;
        }

        /* popup */
        .request_background {
            width: 100%;
            height: 100vh;
            position: fixed;
            left: 0;
            top: 0;
            background-color: #5e8aac81;
            z-index: 1000;
            transition: 1s;
            visibility: hidden;
            opacity: 0;
        }

        .request_background.shown {
            visibility: visible;
            opacity: 1;
        }

        .request_popup {
            position: fixed;
            left: 50%;
            top: 50%;
            width: 572px;
            background-color: #fff;
            text-align: center;
            padding: 55px 88px;
            padding-bottom: 40px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            transform: translate(-50%, 0%);
            visibility: hidden;
            opacity: 0;
            transition: 0.6s;
        }

        .request_popup.open {
            transform: translate(-50%, -50%);
            visibility: visible;
            opacity: 1;
        }

        .request_popup .close {
            position: absolute;
            top: 15px;
            right: 15px;
        }

        .request_popup p {
            font-size: 18px;
            margin-bottom: 20px;
            font-family: "light";
        }

        .request_popup .title {
            font-size: 35px;
            margin-bottom: 20px;
            font-family: "book";
        }

        .request_popup input {
            width: 100%;
            padding-bottom: 5px;
            border-bottom: 1px solid #e9214f;
            padding-top: 18px;
        }

        .request_popup .main_btn {
            margin-top: 50px;
            margin-bottom: 14px;
            background-color: #e9214f;
        }

        .request_popup a {
            font-family: "light";
            color: #5e8aac;
            font-size: 18px;
            text-decoration: underline;
        }

        /* responsiveness */
        @media screen and (max-width: 950px) {
            .result_page {
                width: 95%;
                padding-top: 100px;
            }

            .result_page .tables {
                overflow-x: scroll;
                padding-bottom: 20px;
            }

            .result_page table {
                width: 900px;
            }

            .result_page .tables::-webkit-scrollbar {
                height: 5px;
            }

            .result_page .tables::-webkit-scrollbar-thumb {
                background-color: #e9214f;
            }
        }

        @media screen and (max-width: 650px) {
            .result_page .btm_btns {
                margin: 30px 0;
                flex-direction: column;
                align-items: flex-start;
            }

            .result_page .btm_btns .main_btn {
                margin-left: 0;
                margin-right: 10px;
                margin-top: 10px;
                font-size: 15px;
                width: 170px;
            }

            .request_popup {
                width: 90%;
                padding: 40px 30px;
            }

            .request_popup .title {
                font-size: 28px;
                margin-bottom: 12px;
            }
        }

        @media screen and (max-width: 450px) {
            .result_page .btm_btns .main_btn {
                font-size: 14px;
                width: 150px;
                height: 50px;
            }

            .request_popup .title {
                font-size: 22px;
                margin-bottom: 8px;
            }

            .request_popup p {
                font-size: 15px;
                margin-bottom: 10px;
            }

            .request_popup .main_btn {
                margin-top: 37px;
            }
        }
    </style>
</head>
<body>
<div class="result_page wrapper">
    <div class="title1">
        <div class="head">ღირებულების კალკულაცია</div>
        <p class="op06">გთხოვთ გაითვალისწინოთ რომ ეს კალკულაცია არის მიახლოებით. ფასი და დრო შეიძლება
შეიცვალოს თქვენი მოთხოვნებიდან გამომდინარე.</p>
    </div>
    <div class="tables">
        <table class="cost_table">
            @foreach($features['data'] as $feature)
                <tr>
                    <th rowspan="{{2+count($feature['answer'])}}">{{$feature['title']}}</th>
                </tr>
                @foreach($feature['answer'] as $answer)
                    <tr>
                        <td>
                            {{$answer['title']}}
                        </td>
                        <td>{{$answer['start_price']}}- {{$answer['end_price']}}</td>
                        <td>{{$answer['start_time']}}h-{{$answer['end_time']}}h</td>
                    </tr>
                @endforeach
                <tr class="comment">
                    <td>
                        <div class="flex cm">
                            <span>კომენტარი</span>
                        </div>
                        {{$feature['comment']}}
                    </td>
                </tr>
                @if($loop->index<count($features['data'])-1)
                    <tr class="border">
                        <td></td>
                    </tr>
                @endif
            @endforeach
        </table>
        <table class="result_table">
            <tr>
                <th>მიახლოებითი ღიერებულება</th>
                <th>ფასი</th>
                <th>დრო</th>
            </tr>
            <tr>
                <td>გთხოვთ გაითვალისწინოთ რომ ეს კალკულაცია არის მიახლოებით. ფასი და დრო შეიძლება
შეიცვალოს თქვენი მოთხოვნებიდან გამომდინარე.</td>
                <td class="total_cost">${{$features['totalPrice']}}</td>
                <td class="total_time">{{$features['totalStartTime']}}-{{$features['totalEndTime']}}სთ</td>
            </tr>
        </table>
    </div>
</div>
</body>
</html>
