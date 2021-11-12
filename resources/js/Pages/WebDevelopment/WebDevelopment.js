import React from "react";
import Showcase2 from "../../Components/Showcase2/Showcase2";
import "./WebDevelopment.css";
import {Hr} from "../News/ShowNews/SNCs";
import Form from "../../Components/Form/Form";
import {Link} from "react-router-dom";
import Layout from "../../Layouts/Layout";

const WebDevelopment = () => {
    return (
        <Layout>
            <div className="development_page">
                <div className="showcase">
                    <div className="wrapper flex center">
                        <Showcase2
                            title="Веб Разработки"
                            para1="Insite International - это компания, занимающаяся дизайном и разработкой веб-сайтов, которая начинала с команды из нескольких разработчиков, а сейчас с более чем 100 разработчиками и продолжает расти. В наших услугах по разработке веб-сайтов мы находим решения, которые подходят конкретному владельцу бизнеса, соответствуют целям и отражают высокое качество работы, внимательность деталям и настойчивость команды веб-разработчиков."
                        />
                        <img className="text_bg" src="/images/develop/1.png" alt=""/>
                    </div>
                    <img className="sc_bg" src="/images/develop/2.png" alt=""/>
                </div>
                <div
                    className="dev_sols"
                    style={{background: "url(/images/develop/bg1.png)"}}
                >
                    <div className="wrapper">
                        <p>
                            Gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                            quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                            nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit
                            amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio
                            tincidunt auctor.
                        </p>
                        <div className="grid">
                            <Link to="/solutions">
                                <img src="/images/develop/arr.svg" alt=""/>
                                React JS
                            </Link>
                            <Link to="/solutions">
                                <img src="/images/develop/arr.svg" alt=""/>
                                .NET Core
                            </Link>
                            <Link to="/solutions">
                                <img src="/images/develop/arr.svg" alt=""/>
                                React native
                            </Link>
                            <Link to="/solutions">
                                <img src="/images/develop/arr.svg" alt=""/>
                                LARAVEL
                            </Link>
                            <Link to="/solutions">
                                <img src="/images/develop/arr.svg" alt=""/>
                                HTML/CSS
                            </Link>
                            <Link to="/solutions">
                                <img src="/images/develop/arr.svg" alt=""/>
                                PHP
                            </Link>
                            <Link to="/solutions">
                                <img src="/images/develop/arr.svg" alt=""/>
                                NODE.js
                            </Link>
                            <Link to="/solutions">
                                <img src="/images/develop/arr.svg" alt=""/>
                                Native JS
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="second">
                    <div className="wrapper">
                        <Hr hrClass="hr center"/>
                        <div className="flex">
                            <img src="/images/develop/3.png" alt=""/>
                            <div className="content">
                                <p>
                                    Разработка программного обеспечения начинается с компании,
                                    которой вы можете доверять и быть уверенной, что ваша идея будет
                                    принята и понята командой разработчиков. Insite International
                                    гарантирует уникальность, приверженность, чистый код, высокую
                                    производительность - веб-сайт, который радует ваш глаз, делает
                                    бизнес прибыльным, и вам не нужно его перестраивать или
                                    перепроектировать.
                                </p>
                                <p>
                                    Insite International, как компания, занимающаяся разработкой
                                    комплексных веб-аппликаций на заказ, гарантирует, что наши
                                    услуги по разработке увеличивают потенциал бизнес-идей и
                                    обеспечивают ее конкурентоспособность на рынке.{" "}
                                </p>
                                <p>
                                    Мы всегда заботимся о создании продукции, которая может быть
                                    конкурентоспособной, привлекательной для пользователей, идеально
                                    спроектированной и с удобной навигацией. Для этого
                                    бизнес-аналитики, менеджеры по взаимодействию и доставке,
                                    менеджеры проектов, руководители групп, инженеры по программному
                                    обеспечению и инженеры по обеспечению качества вносят свой вклад
                                    на определенных этапах и всегда действуют гибко и активно.
                                    Гибкое управление проектами обеспечивает эффективность в
                                    разработке.
                                </p>
                                <p>
                                    Для тех, кто хочет иметь фантастические веб-сайты - компания
                                    Insite International к вашим услугам. Мы предоставляем лучшие
                                    рентабельные услуги. Опыт компании и полная поддержка проектов
                                    вселяют уверенность и продвигают позитивное сотрудничество.
                                    Итак, когда вы решите нанять аутсорсинговю компанию для
                                    достижения необходимой цели, приготовьтесь иметь дело с
                                    настоящими мастерами. Все процессы от заполнения контактной
                                    формы на нашем сайте до представления окончательных результатов
                                    выполняются на высоком уровне. Обязательно свяжитесь с нами и
                                    отправьте информацию о концепции проекта, укажите свои ожидания
                                    от конечного желаемого результата. Лучшие технологии и наш
                                    богатый опыт позволят вашей идее стать прибыльным бизнесом.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" rest">
                    <div className="wrapper">
                        <div className="levels">
                            <Showcase2
                                title="Процесс Создания"
                                para1="Разработка сайта на заказ ведется на основе полного жизненного цикла. Мы используем лучшие методы управления временем и проектами для успешного внедрения универсальных веб-решений для вашего бизнеса."
                            />
                            <div className="flex">
                                <div className="level_el">
                                    <img src="/images/develop/Discover.png" alt=""/>
                                    <p>Понимание запроса</p>
                                    <p className="op06">
                                        Insite International предлагает сервис планировки для оценки
                                        рыночных тенденций и потребностей конечных пользователей. Это
                                        помогает более глубоко проанализировать потребность
                                        предлагаемого решения для конкретной задачи. Затем команда
                                        профессионалов сделает набросок вашей идей в визуальном стиле.
                                    </p>
                                </div>
                                <div className="level_el">
                                    <img src="/images/develop/Analyse.png" alt=""/>
                                    <p>Планирование проекта</p>
                                    <p className="op06">
                                        Большая доля успеха проекта заключается в планировании объема
                                        и управлении действиями, чтобы вовремя увидеть результаты. Мы
                                        эффективно распределяем ресурсы и выбираем лучший план,
                                        соответствующий бюджету к запрошенным срокам.
                                    </p>
                                </div>
                                <div className="level_el">
                                    <img src="/images/develop/Design.png" alt=""/>
                                    <p>Гибкая разработка</p>
                                    <p className="op06">
                                        Гибкое управление проектами - ключ к успешным проектам.
                                        Квалифицированные менеджеры проектов в Insite International
                                        всегда просматривают и контролируют прозрачность коммуникации,
                                        непосредственное выполнение задач, отчитываются и следят за
                                        прогрессом. Регулярное общение с клиентами позволяет нам
                                        контролировать изменения и оставаться гибкими.
                                    </p>
                                </div>
                                <div className="level_el">
                                    <img src="/images/develop/Build.png" alt=""/>
                                    <p>Проверка качества</p>
                                    <p className="op06">
                                        Insite International предоставляет услуги автоматизированного
                                        тестирования. В зависимости от требований клиентов и
                                        особенностей проекта инженеры по обеспечению качества проведут
                                        необходимое тестирование.
                                    </p>
                                </div>
                                <div className="level_el">
                                    <img src="/images/develop/5.png" alt=""/>
                                    <p>Доставка</p>
                                    <p className="op06">
                                        Insite International разработала стандарты доставки, которые
                                        обеспечивают успешность каждого финального продукта и его
                                        развертывания.
                                    </p>
                                </div>
                                <div className="level_el">
                                    <img src="/images/develop/6.png" alt=""/>
                                    <p>Поддержка</p>
                                    <p className="op06">
                                        С Insite International вы можете быть уверены в том, что наша
                                        команда послепродажной поддержки работает вместе с вами для
                                        устранения неполадок и обновления функций.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="projs">
                            {/* <Showcase2 title="популярные проекты" />
            <div className="grid">
              <ProjectBox
                link="https://insite.international/en/"
                imgNum="1"
                title="Aeroline"
              />
              <ProjectBox
                link="https://insite.international/en/"
                imgNum="2"
                title="Ameus"
              />
              <ProjectBox
                link="https://insite.international/en/"
                imgNum="3"
                title="Viptrade EU"
              />
            </div>
            <Button2 text="Узнайте Больше" large /> */}
                            <Form title="Оставьте нам записку"/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default WebDevelopment;
