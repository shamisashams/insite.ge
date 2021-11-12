import React from "react";
import Showcase1 from "../../Components/Showcase1/Showcase1";
import "./Vacancies.css";
import VacBox from "./VacBox/VacBox";
import Layout from "../../Layouts/Layout";
import {usePage} from '@inertiajs/inertia-react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Paginations from "../../Components/Pagination";
import DocumentMeta from 'react-document-meta';
import Meta from "../Meta/Meta";

const Vacancies = ({vacancies}) => {
    const meta = Meta('Some Meta Title', 'keyword', 'description');

    const {locale, flash} = usePage().props;
    const MySwal = withReactContent(Swal)

    if (flash.success) {
        MySwal.fire({
            title: <p>{flash.success}</p>,
        })
    }
    return (
        <DocumentMeta {...meta}>
            <Layout>
                <div className="vacancy_page">
                    <Showcase1
                        bgSrc="url(/images/sc-bgs/vacancy-bg.png)"
                        color="#fff"
                        fontFamily="bold"
                        head="Вакансии"
                        para="Have A Project? Feel Free To Call, Send Us An Email Or Complete The Enquiry Fmor."
                    />

                    <div className="wrapper vacancy_list">
                        {vacancies.data.data.map((item, index) => (
                            <VacBox
                                key={index}
                                id={item.id}
                                locale={locale}
                                trans={vacancies.trans_text}
                                title={item.title}
                                experience={item.experience}
                                description={item.description}
                                time={item.commitment}
                                salary={item.salary}
                                location={item.location}
                            />

                        ))}
                        {
                            vacancies.data.data.length ?
                                <Paginations links={vacancies.data.links}/> : ""
                        }
                    </div>
                </div>
            </Layout>
        </DocumentMeta>
    );
};

export default Vacancies;
