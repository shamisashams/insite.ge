import React from "react";
import Form from "../../Components/Form/Form";
import Pagination from "../../Components/Pagination";
import ProjectBox from "./ProjectBox/ProjectBox";
import "./Projects.css";
import Layout from "../../Layouts/Layout";
import Meta from "../Meta/Meta";
import DocumentMeta from 'react-document-meta';

const Projects = () => {
    const meta = Meta('Insite - პორტფოლიო', 'საიტების შექმნა, საიტის შექმნა, საიტის შეცვლა, საიტის გადატანა', 'გაეცანით ჩვენი კომპანიის ნამუშევრებს');

    return (
        <DocumentMeta {...meta}>
            <Layout>
                <div className="projects_page wrapper">
                    <div className="title main">ჩვენი პორტფოლიო</div>
                    <div className="grid">
                        <ProjectBox
                            title="Glass Service"
                            imgNum="9"
                            link="http://glassservice.ge/ge" target="_blank"
                        />
                        <ProjectBox
                            title="Frontline Georgia"
                            imgNum="8"
                            link="https://frontline.ge/" target="_blank"
                        />
                        <ProjectBox
                            title="Addict"
                            imgNum="4"
                            link="https://adictllc.ge/ge" target="_blank"
                        />
                        <ProjectBox
                            title="Award Holding"
                            imgNum="5"
                            link="https://awardholding.com/en" target="_blank"
                        />
                        <ProjectBox
                            title="Chateau Svanidze"
                            imgNum="6"
                            link="https://chateausvanidze.com/ru" target="_blank"
                        />
                        <ProjectBox
                            title="Svanidze Holding"
                            imgNum="18"
                            link="https://svanidzeholding.com/en" target="_blank"
                        />
                        <ProjectBox
                            title="GSBC"
                            imgNum="10"
                            link="https://gsbc.ge/en" target="_blank"
                        />
                        <ProjectBox
                            title="Ibercompany"
                            imgNum="11"
                            link="http://ibercompany.ge/ge" target="_blank"
                        />
                        <ProjectBox
                            title="Iberipharma"
                            imgNum="12"
                            link="https://iberipharma.ge/ge" target="_blank"
                        />
                        <ProjectBox
                            title="Loyal Partners"
                            imgNum="13"
                            link="https://www.loyal.partners/en/" target="_blank"
                        />
                        <ProjectBox
                            title="Metalart"
                            imgNum="14"
                            link="https://metalart.ge/" target="_blank"
                        />
                        <ProjectBox
                            title="Mrs Kamkama"
                            imgNum="15"
                            link="https://mrskamkama.ge/index-ru.html" target="_blank"
                        />
                        <ProjectBox
                            title="Myautohome"
                            imgNum="16"
                            link="https://myautohome.ge/en" target="_blank"
                        />
                        <ProjectBox
                            title="Sandrex"
                            imgNum="17"
                            link="https://sandrex.ge/" target="_blank"
                        />
                        <ProjectBox
                            title="Universal Project"
                            imgNum="19"
                            link="https://uproject.ge/ka" target="_blank"
                        />
                        <ProjectBox
                            title="Viptrade Georgia"
                            imgNum="20"
                            link="https://viptrade.ge/ru" target="_blank"
                        />
                        <ProjectBox
                            title="Viptrade Europe"
                            imgNum="21"
                            link="https://viptrade.eu/ru" target="_blank"
                        />
                        <ProjectBox
                            title="Volta"
                            imgNum="22"
                            link="https://volta.ge/ge" target="_blank"
                        />
                        <ProjectBox
                            title="Ameus Barber Shop"
                            imgNum="2"
                            link="https://ameus.ge/ka/" target="_blank"
                        />
                        <ProjectBox
                            title="Derufa"
                            imgNum="7"
                            link="https://derufa.ge/ge" target="_blank"
                        />
                    </div>
                    <Form title="Оставьте нам записку"/>
                </div>
            </Layout>
        </DocumentMeta>
    );
};

export default Projects;
