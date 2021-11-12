import React from "react";
import Form from "../../Components/Form/Form";
import Showcase1 from "../../Components/Showcase1/Showcase1";
import Text35 from "../../Components/Text35";
import "./AboutUs.css";
import Layout from "../../Layouts/Layout";
import DocumentMeta from 'react-document-meta';
import Meta from "../Meta/Meta";

const AboutUs = () => {
    const meta = Meta('Some Meta Title', 'keyword', 'description');
    return (
        <DocumentMeta {...meta}>
            <Layout>
                <div className="about_us_page">
                    <Showcase1
                        bgSrc="url(/images/aboutus/sc-bg.png)"
                        color="#272639"
                        head="О Нас"
                        fontFamily="book"
                    />
                    <div
                        className="about_content"
                        style={{
                            background: "url(/images/aboutus/ct-bg.png) no-repeat",
                            backgroundPosition: "center bottom",
                        }}
                    >
                        <div className="wrapper">
                            <div className="block block1">
                                <Text35
                                    text="Insite International – Международная компания по разработке и внедрению цифровых решений"/>
                                <p className="op06">Компания Insite International было основана группой разработчиков
                                    энтузиастов в 2014 году. Компания в начале своего пути занималось разработкой веб
                                    аппликаций. Сфера деятельности расширялась и вскоре компания начала предоставлять
                                    услуги
                                    биржевым брокерским компаниям и принялась за модернизацию существующей цифровой
                                    торговой
                                    площадки совместно с другими крупными IT компаниями такими как IBM, Microsoft,
                                    Amazon и
                                    другие.</p>
                                <p className="op06">В последующие годы компания расширялась что предоставила ей
                                    возможность
                                    предоставлять услуги и в других сферах IT сервиса. Так, например, после начала
                                    пандемий
                                    Covid-19, с 2020 года наши специалисты обеспечили безопасный переход более 87 000
                                    сотрудников разных компаний на удалённую работу. </p>
                                <p className="op06">Расширение сервисов предоставила возможность предлагать удобные
                                    пакеты
                                    услуг для разных компаний. Так, например, самый популярный сервис «под ключ», где от
                                    заказчика требуется только краткое объяснение цели сайта, а всё остальное уже
                                    предоставляется нами. После завершения проекта, заказчику не нужно думать о
                                    сохранности,
                                    безопасности или о любом другом аспекте предоставленного продукта так как этим
                                    всегда
                                    будет занимается команда Insite International. </p>
                                <p className="op06">Философия компании гласить – «наши возможности ограничены только
                                    вашей
                                    фантазией». Если у вас есть проект, который вам кажется невыполнимым то мы напишем
                                    те
                                    криля на которых полетит ваша идея! </p>
                            </div>
                            <div className="block block2">
                                <Text35 text="Оставьте нам записку"/>
                                <p className="op06">Хотите с нами пообщается? Пожалуйста, оставьте свой контактные
                                    данные и
                                    мы с вами свяжемся по удобному вами методу. Наша команда всегда рада вам помочь!</p>
                            </div>
                            <Form/>
                        </div>
                    </div>
                </div>
            </Layout>
        </DocumentMeta>
    );
};

export default AboutUs;
