import React from "react";
import Form from "../../Components/Form/Form";
import Showcase2 from "../../Components/Showcase2/Showcase2";
import Title1 from "../../Components/Title1";
import {CheckedBox} from "../RemoteWork/Objects/Objects";
import "./Security.css";
import SecurityBox from "./SecurityBox/SecurityBox";
import Layout from "../../Layouts/Layout";

const Security = () => {
    return (
        <Layout>
            <div className="security_page">
                <div
                    className="showcase"
                    style={{background: "url(/images/security/1.png) no-repeat"}}
                >
                    <div className="wrapper">
                        <Showcase2
                            title="Сетевая Безопасность"
                            para1="Insite International занимается проектированием, внедрением решений сетевой безопасности, а также осуществляет сервисное сопровождение."
                        />
                    </div>
                </div>
                <p className="wrapper paragraph op06">Злоумышленники применяют различные способы для атак и
                    проникновения во внутреннюю сеть компании — от методов социальной инженерии до использования
                    уязвимостей в программном обеспечении. Чтобы обеспечить работоспособность и целостность сети и
                    критически важных данных, используется целый ряд аппаратных и программных технологий. К ним
                    относятся средства защиты приложений и контроля доступа, межсетевые экраны, VPN, системы
                    предотвращения вторжений, антивредоносное и антивирусное ПО и многие другие.</p>
                <div
                    className="main_content"
                    style={{background: "url(/images/security/2.png) no-repeat"}}
                >
                    <div className="wrapper">
                        <Title1 head="Польза для бизнеса"/>
                        <div className="grid">
                            <SecurityBox
                                icon="1"
                                para="Контроль доступа и передачи конфиденциальных данных"
                            />
                            <SecurityBox icon="2" para="Защита от направленных атак (APT)"/>
                            <SecurityBox
                                icon="3"
                                para="Снижение рисков безопасности, репутационных и "
                            />
                            <SecurityBox icon="4" para="Операционная эффективность отдела ИБ"/>
                            <SecurityBox
                                icon="5"
                                para="Снижение нагрузок на технику за счет фильтрации и автоматизации"
                            />
                            <SecurityBox
                                icon="6"
                                para="Рост эффективности работы сотрудников"
                            />
                        </div>
                        <Title1 head="Преимущества Аутсорсинга"/>
                        <div className="checks">
                            <CheckedBox
                                text="Нет необходимости найма сотрудников для работы с средствами сетевой безопасности и риска их "/>
                            <CheckedBox
                                text="Не нужно разбираться с техническими аспектами и заниматься проблемами работы системы"/>
                            <CheckedBox
                                text="Использование проверенных решений, учитывающих особенности иб в разных странах"/>
                            <CheckedBox
                                text="Стоимость аутсорсинга соизмерима либо меньше стоимости содержания в штате выделенных "/>
                            <CheckedBox text="Четкое понимание состава услуг и стоимости, работа по sla"/>
                        </div>
                    </div>
                </div>
                <div className="wrapper">
                    <Form title="Оставьте нам записку"/>
                </div>
            </div>
        </Layout>
    );
};

export default Security;
