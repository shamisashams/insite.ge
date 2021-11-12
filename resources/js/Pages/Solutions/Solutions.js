import React from "react";
import Form from "../../Components/Form/Form";
import SeContent from "../CDN/SeContent/SeContent";
import "./Solutions.css";
import Layout from "../../Layouts/Layout";

const Solutions = () => {
    window.addEventListener("scroll", (event) => {
        let scroll =
            window.scrollY || window.scrollTop || event.srcElement.body.scrollTop;
        document.documentElement.style.setProperty("--scroll-var", scroll + "px");
    });
    return (
        <Layout>
            <>
                <div className="solutions_page">
                    <section
                        className="sec left one"
                        style={{background: "url(images/solutions/1.png) no-repeat"}}
                    >
                        <div className="wrapper">
                            <div className="content">
                                <SeContent
                                    title="React JS"
                                    para="React может использоваться для разработки одностраничных и мобильных приложений. Его цель — предоставить высокую скорость, простоту и масштабируемость. В качестве библиотеки для разработки пользовательских интерфейсов React часто используется с другими библиотеками, такими как MobX, Redux и GraphQL"
                                />
                            </div>
                        </div>
                    </section>
                    <section
                        className="sec right two"
                        style={{background: "url(images/solutions/2.png) no-repeat"}}
                    >
                        <div className="wrapper">
                            <div className="content">
                                <SeContent
                                    title="React native"
                                    para="React Native — это кроссплатформенный фреймворк с открытым исходным кодом для разработки нативных мобильных и настольных приложений на JavaScript и TypeScript, созданный Facebook, Inc. React Native поддерживает такие платформы как Android, Android TV, iOS, macOS, Apple tvOS, Web, Windows и UWP, позволяя разработчикам использовать возможности библиотеки React вне браузера для создания нативных приложений, имеющих полный доступ к системным API платформ."
                                />
                            </div>
                        </div>
                    </section>
                    <section
                        className="sec left three"
                        style={{background: "url(images/solutions/3.png) no-repeat"}}
                    >
                        <div className="wrapper">
                            <div className="content">
                                <SeContent
                                    title="HTML/CSS"
                                    para="В то время как HTML является основной структурой вашего сайта, CSS - это то, что дает всему вашему сайту стиль. Цвета, интересные шрифты и фоновые изображения – все это заслуга CSS. Этот язык влияет на все настроение веб-страницы, что делает его невероятно мощным инструментом и важным навыком для веб-разработчиков. Он также позволяет веб-сайтам адаптироваться к различным размерам экрана и типам устройств."
                                />
                            </div>
                        </div>
                    </section>
                    <section
                        className="sec left four"
                        style={{background: "url(images/solutions/4.png) no-repeat"}}
                    >
                        <div className="wrapper">
                            <div className="content">
                                <SeContent
                                    title="NODE.js"
                                    para="Node или Node.js — программная платформа, основанная на движке V8 (транслирующем JavaScript в машинный код), превращающая JavaScript из узкоспециализированного языка в язык общего назначения. Node.js добавляет возможность JavaScript взаимодействовать с устройствами ввода-вывода через свой API, написанный на C++, подключать другие внешние библиотеки, написанные на разных языках, обеспечивая вызовы к ним из JavaScript-кода. Node.js применяется преимущественно на сервере, выполняя роль веб-сервера, но есть возможность разрабатывать на Node.js и десктопные оконные приложения (при помощи NW.js, AppJS или Electron для Linux, Windows и macOS) и даже программировать микроконтроллеры (например, tessel, low.js и espruino). В основе Node.js лежит событийно-ориентированное и асинхронное (или реактивное) программирование с неблокирующим вводом/выводом."
                                />
                            </div>
                        </div>
                    </section>
                    <section
                        className="sec right five"
                        style={{background: "url(images/solutions/5.png) no-repeat"}}
                    >
                        <div className="wrapper">
                            <div className="content">
                                <SeContent
                                    title=".NET Core"
                                    para="В последние годы все более популярной становится бесплатная платформа .NET. Она используется многими разработчиками для создания и тестирования приложений, это возможно за счет открытого исходного кода. Одним из вариантов горизонтального увеличения платформы в различные операционные системы стала .NET Core. С ее помощью обеспечивается возможность работы с приложениями, которые разрабатывались для Windows и прочих ОС."
                                />
                            </div>
                        </div>
                    </section>
                    <section
                        className="sec left six"
                        style={{background: "url(images/solutions/6.png) no-repeat"}}
                    >
                        <div className="wrapper">
                            <div className="content">
                                <SeContent
                                    title="LARAVEL"
                                    para="Laravel — бесплатный веб-фреймворк с открытым кодом, предназначенный для разработки с использованием архитектурной модели MVC (англ. Model View Controller — модель-представление-контроллер). Laravel выпущен под лицензией MIT."
                                />
                            </div>
                        </div>
                    </section>
                    <section
                        className="sec right seven"
                        style={{background: "url(images/solutions/7.png) no-repeat"}}
                    >
                        <div className="wrapper">
                            <div className="content">
                                <SeContent
                                    title="PHP"
                                    para="Первое, что нужно понимать, php - это просто язык программирования. Но дело в том, что этот язык программирования ориентирован на разработку веб-приложений и веб-сайтов. Это так называемый серверный язык программирования или backend. Т. е. обратная часть языка php, если Вы его используете для целей разработки веб-сайтов и для целей разработки каких-то скриптов и приложений, работает на удаленном сервере на каком-то хостинге, который поддерживает этот веб-сервер. "
                                />
                            </div>
                        </div>
                    </section>
                    <section
                        className="sec left eight"
                        style={{background: "url(images/solutions/8.png) no-repeat"}}
                    >
                        <div className="wrapper">
                            <div className="content">
                                <SeContent
                                    title="Native JS"
                                    para="Это библиотека, позволяющая делать кросс-платформенные приложения, используя XML, CSS, JavaScript. Native script решает ту же задачу, что и уже всем известный phonegap (создание кросс-платформенных приложений), но подходы у них разные. Phonegap использует движок браузера, чтобы отобразить ваш UI (фактически вы получаете веб-страницу), Native script использует нативный рендеринг, использует элементы нативного UI. Следующее важное отличие: чтобы получить доступ к камере, gps и так далее в phonegap необходимо устанавливать плагины, в то время как NS дает доступ из коробки."
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
    );
};

export default Solutions;
