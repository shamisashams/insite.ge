import React from "react";
import "./CDN.css";
import SeContent from "./SeContent/SeContent";
import Form from "../../Components/Form/Form";
import Layout from "../../Layouts/Layout";
import DocumentMeta from 'react-document-meta';
import Meta from "../Meta/Meta";

const CDN = () => {
    const meta = Meta('Some Meta Title', 'keyword', 'description');

    window.onscroll = function () {
        var scroll =
            window.scrollY ||
            window.scrollTop ||
            document.getElementsByTagName("html")[0].scrollTop;
        document.documentElement.style.setProperty("--scroll-var", scroll + "px");
    };
    return (
        <DocumentMeta {...meta}>
            <Layout>
                <>
                    <div className="cdn_page">
                        <section
                            className="sec left one"
                            style={{background: "url(images/cdn/1.png) no-repeat"}}
                        >
                            <div className="wrapper">
                                <div className="content ">
                                    <SeContent
                                        title="Cloudflare"
                                        para="Cloudflare — это сеть серверов по всему миру, к которой люди подключают свои сайты, чтобы увеличить скорость их загрузки и защитить от DDoS-атак. Также при помощи этого сервиса можно управлять DNS-записями на домене и перевести сайт на HTTPS. У Cloudflare есть бесплатный тариф и несколько платных. В зависимости от тарифа уровень защиты и возможности по ускорению сайта будут отличаться."
                                    />
                                </div>
                            </div>
                        </section>
                        <section
                            className="sec right two"
                            style={{background: "url(images/cdn/2.png) no-repeat"}}
                        >
                            <div className="wrapper">
                                <div className="content ">
                                    <SeContent
                                        title="Route 53"
                                        para="С помощью сервиса Amazon Route 53 Traffic Flow можно просто управлять глобальным трафиком, используя различные типы маршрутизации (такие как маршрутизация на базе задержки, DNS с учетом географического положения, географическая близость и циклический взвешенный алгоритм), сочетая их с возможностью переброса сервиса DNS и создавая в результате отказоустойчивые архитектуры с низкой задержкой. Используя несложный визуальный редактор Amazon Route 53 Traffic Flow, можно просто управлять маршрутизацией конечных пользователей к адресам приложений как в рамках одного региона AWS, так и при распределении трафика по всему миру. Кроме того, в сервисе Amazon Route 53 можно зарегистрировать доменное имя: при покупке доменов (например, example.com) и управлении ими Amazon Route 53 автоматически настроит для них параметры DNS."
                                    />
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="bottom_form wrapper">
                        <Form title="Оставьте нам записку"/>
                    </div>
                </>
            </Layout>
        </DocumentMeta>
    );
};

export default CDN;
