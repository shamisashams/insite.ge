import React from "react";
import Title1 from "../../Components/Title1";
import InLink from "../../Components/InLink";
import {HeroSlider} from "./HeroSlider/HeroSlider";
import ServiceObject from "./Services/ServiceObject";
import Technology from "./Technology/Technology";
import "./MainPage.css";
import WorkWithUs from "./WorkWithUs/WorkWithUs";
import Blog from "./Blog/Blog";
import Text35 from "../../Components/Text35";
import Form from "../../Components/Form/Form";
import Layout from "../../Layouts/Layout";
import DocumentMeta from 'react-document-meta';
import Meta from "../Meta/Meta";

const MainPage = ({blogs}) => {
    const meta = Meta('Some Meta Title', 'keyword', 'description');
    return (
        <DocumentMeta {...meta}>
            <Layout>
                <div className="main_page">
                    <div
                        className="hero_section"
                        style={{
                            background: "url(images/hero/bg.png)",
                            backgroundPosition: "center",
                        }}
                    >
                        <HeroSlider/>
                    </div>
                    <div
                        className="services_section"
                        style={{background: "url(images/home/services/bg.png)"}}
                    >
                        <div className="wrapper">
                            <InLink text="подробнее"/>
                            <Title1
                                head="Сервисы"
                                para="Ознакомитесь с нашим широким спектром сервисов. Мы предоставляем полный спектр услуг в рамках каждого сервиса."
                            />
                            <div className="service_boxes">
                                <ServiceObject
                                    href="/services/planning"
                                    imgNum="1"
                                    title="Планировка"
                                    para="Планировка рабочего процесса, сетевой архитектуры и систем безопасности."
                                />
                                <ServiceObject
                                    href="/services/web-development"
                                    imgNum="2"
                                    title="Веб Разработки"
                                    para="Создание, модификация и поддержка веб аппликаций любой сложности."
                                />
                                <ServiceObject
                                    href="/services/design"
                                    imgNum="3"
                                    title="UI/UX Дизайн"
                                    para="Предел наших возможностей только ваша фантазия. Мы воплотим в жизнь ваше видение."
                                />
                                <ServiceObject
                                    href="/services/virtualization"
                                    imgNum="4"
                                    title="Виртуализация"
                                    para="Мы поможем вам виртуализировать рабочую среду в целях повышения эффективности, безопасности и оптимизации ресурсов."
                                />
                                <ServiceObject
                                    href="/services/remote-work"
                                    imgNum="5"
                                    title="Удалённая Работа"
                                    para="Идите в ногу современным тенденциям, а мы обеспечим безопасность и быстродействие."
                                />
                                <ServiceObject
                                    href="/services/security"
                                    imgNum="6"
                                    title="Сетевая Безопасность"
                                    para="Обезопасьте вашу рабочую среду от целевых и случайных атак. Обезопасьте самую уязвимую часть вашей компании."
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        className="technology_section"
                        style={{
                            background: "url(images/home/technology/bg.png)",
                            backgroundAttachment: "fixed",
                        }}
                    >
                        <div className="wrapper">
                            <InLink text="подробнее"/>
                            <Title1 head="Технологии"/>
                        </div>
                        <Technology/>
                    </div>
                    <div className="work_with_us">
                        <div className="wrapper">
                            <InLink text="подробнее"/>
                            <Title1 head="Работайте с Нами"/>
                        </div>
                        <WorkWithUs/>
                    </div>
                    <div className="blogs_section">
                        <div className="wrapper">
                            <InLink href="/blog" text="подробнее"/>
                            <Title1
                                head="Блог"
                                para="Наши технические эксперты поделятся своими знаниями и дадут советы по разным техническим вопросам. Будь с нами и не пропусти того что может тебе однажды помочь в решение проблемы :)"
                            />
                            <div className="flex blog_flex">
                                {
                                    blogs.map((item, index) =>
                                        <React.Fragment key={index}>
                                            <Blog
                                                img={item.main_file ? "/" + item.main_file.path + "/" + item.main_file.title : ""}
                                                date={item.created_at}
                                                title={item.title}
                                                para={item.description}
                                                id={item.id}
                                            />
                                            <hr/>
                                        </React.Fragment>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="flex bottom main_page wrapper">
                        <div>
                            <Text35 text="Оставьте нам записку"/>
                            <p className="op06">
                                Хотите с нами пообщается? Пожалуйста, оставьте свой контактные данные и мы с вами
                                свяжемся по удобному вами методу. Наша команда всегда рада вам помочь!
                            </p>
                        </div>
                        <Form title=""/>
                    </div>
                </div>
            </Layout>
        </DocumentMeta>
    );
};

export default MainPage;
