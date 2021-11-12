import React from "react";
import Showcase2 from "../../Components/Showcase2/Showcase2";
import Title1 from "../../Components/Title1";
import Form from "../../Components/Form/Form";
import "./Planning.css";
import Layout from "../../Layouts/Layout";
import Meta from "../Meta/Meta";
import DocumentMeta from 'react-document-meta';

const Planning = () => {
    const meta = Meta('Some Meta Title', 'keyword', 'description');

    return (
        <DocumentMeta {...meta}>
            <Layout>
                <div className="planning_page">
                    <div
                        className="showcase"
                        style={{background: "url(/images/plan/1.png) no-repeat"}}
                    >
                        <div className="wrapper">
                            <Showcase2
                                title="Планировка"
                                subtitle="УСЛУГИ ПЛАНИРОВКИ ДЛЯ ПРОЕКТОВ ПРОГРАММНОГО ОБЕСПЕЧЕНИЯ"
                                para1="Преимущества услуг планировки нельзя недооценивать. Поскольку с момента представления идеи, ее реализация требует предварительного тщательного изучения. Планировка на этапе создания самая важная дабы понимать соответствуют ли предполагаемое решения клиента и эго требованиям и насколько данное решение может быть эффективным."
                            />
                        </div>
                    </div>
                    <div className="wrapper main">
                        <Title1
                            head="ЭТАП ПЛАНИРОВКИ - ПРЕИМУЩЕСТВО ПРИ РАЗРАБОТКЕ"
                            para="Изучение потребностей клиентов происходит в процессе переговоров, дискуссий и встреч. Услуги по планировке могут привести ко множеству изменениям в первоначальных идеях клиента, которые всегда значительно улучшаются дизайнерами, менеджерами и техническими руководителями. И профессионалы компании, и заказчик получают выгоду от этапа планировки, поскольку установлены четкие требования, обсуждаются функции, известен бюджет и определены временные рамки. Планировка подразумевает гарантированную поддержку со стороны профессионалов компании, чтобы помочь вам оптимизировать функциональность продукта и оценить технические требования. Мы консультируем и вовлекаем клиента в обсуждения будущего продукта. Вы получаете не только фиксированную цену, но и возможность узнать об обязательствах компании. "
                        />
                        <strong>Процесс Планировки Разработки Продукта</strong>
                        <img className="steps" src="/images/plan/2.png" alt=""/>
                        <Form title="Оставьте нам записку"/>
                    </div>
                </div>
            </Layout>
        </DocumentMeta>
    );
};

export default Planning;
