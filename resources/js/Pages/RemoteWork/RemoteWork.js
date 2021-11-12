import React from "react";
import Form from "../../Components/Form/Form";
import InLink from "../../Components/InLink";
import Showcase2 from "../../Components/Showcase2/Showcase2";
import Text35 from "../../Components/Text35";
import {BoxOne, BoxTwo, CheckedBox} from "./Objects/Objects";
import "./RemoteWork.css";
import Layout from "../../Layouts/Layout";
import Meta from "../Meta/Meta";
import DocumentMeta from 'react-document-meta';

const RemoteWork = () => {
    const meta = Meta('Some Meta Title', 'keyword', 'description');

    return (
        <DocumentMeta {...meta}>
            <Layout>
                <div className="remote_page">
                    <div
                        className="showcase"
                        style={{background: "url(/images/remote/1.png) no-repeat "}}
                    >
                        <div className="wrapper">
                            <Showcase2
                                title="Удалённая Работа"
                                para1="Переведите компанию на дистанционную работу с сохранением эффективности."
                            />
                            <Form title="Оставьте нам записку"/>
                        </div>
                    </div>
                    <div className="wrapper main">
                        <div className="flex first_boxes">
                            <BoxOne
                                title="Сохраняйте эффективность"
                                para="Подключите виртуальный офис и обеспечьте удаленным сотрудникам доступ ко всем файлам, базам данных, программному обеспечению компании."
                            />
                            <BoxOne
                                title="Работайте без ограничений"
                                para="Работайте с привычными программами удалённо. Наши специалисты помогут в настройке и переносе данных."
                            />
                            <BoxOne
                                title="Контролируйте работу"
                                para="Получайте информацию о работе компании в одном окне."
                            />
                        </div>
                        <Text35 text="ОСНОВНЫЕ ПРЕИМУЩЕСТВА перехода на удалённую работу"/>
                        <div className="box2_flex flex">
                            <div className="column">
                                <BoxTwo icon="1" text="ЭКОНОМИЯ"/>
                                <InLink
                                    text="За счет снижения цены за одно рабочее место и минимальных требований к конфигурации."/>
                                <InLink text="Экономия на лицензии"/>
                                <InLink text="Экономия времени"/>
                            </div>
                            <div className="column">
                                <BoxTwo icon="2" text="БЕЗОПАСНОСТЬ"/>
                                <InLink text="Безопасность хранения персональных данных и защита от утечек"/>
                                <InLink
                                    text="Отсутствуют сбои, связанные с неправильными действиями пользователя или использованием вредоносного ПО."/>
                            </div>
                            <div className="column">
                                <BoxTwo icon="3" text="КОНТРОЛЬ"/>
                                <InLink text="Полный контроль со стороны руководителя за действиями пользователя"/>
                            </div>
                            <div className="column">
                                <BoxTwo icon="4" text="ВИРТУАЛИЗАЦИЯ"/>
                                <InLink text="Возможность работы с помощью удаленного подключения"/>
                                <InLink text="Экономия на офисной аппаратуре"/>
                            </div>
                        </div>
                        <Text35 text="ПЕРЕЙДЯ НА УДАЛЁННУЮ РАБОТУ вы получаете возможность:"/>
                        <div className="check_grid">
                            <CheckedBox text="Переводить сотрудников на удаленную работу в случае форс-мажора"/>
                            <CheckedBox text="Сохранять конфиденциальность и коммерческую тайну"/>
                            <CheckedBox text="Экономить на лицензированных программах"/>
                            <CheckedBox text="Контролировать сотрудников (рабочее время и деятельность)"/>
                            <CheckedBox text="Использовать единую базу для хранения информации"/>
                            <CheckedBox text="Экономить на комплектации рабочего места"/>
                            <CheckedBox text="Нанимать сотрудников из других стран"/>
                            <CheckedBox text="Использовать резервное копирование данных"/>
                            <CheckedBox text="Экономить время для настройки рабочего места"/>
                        </div>
                    </div>
                    <div
                        className="form_sec"
                        style={{background: "url(/images/remote/2.png) no-repeat"}}
                    >
                        <div className="wrapper">
                            <Form title="Оставьте нам записку"/>
                        </div>
                    </div>
                </div>
            </Layout>
        </DocumentMeta>
    );
};

export default RemoteWork;
