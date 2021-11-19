import React, {useState, useEffect, useRef} from "react";
import "./ShowVacancy.css";
import Showcase1 from "../../../Components/Showcase1/Showcase1";
import VacDetails from "../VacDetails";
import ApplicationForm from "../ApplicationForm";
import Layout from "../../../Layouts/Layout";
import {usePage} from "@inertiajs/inertia-react";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
// import parse from 'html-react-parser';
import DocumentMeta from 'react-document-meta';
import Meta from "../../Meta/Meta";

const ShowVacancy = ({data}) => {
    const meta = Meta(data.vacancy.meta_title, data.vacancy.meta_keyword, data.vacancy.meta_description);

    const [appForm, setAppForm] = useState(false);
    const toggleAppForm = () => {
        setAppForm(!appForm);
    };

    const MySwal = withReactContent(Swal)


    const share = useRef(null);

    function copyToClipboard() {
        let location = window.location.href;
        MySwal.fire({
            icon: 'success',
            html: <p style={{fontSize: '20px', textAlign: 'center'}}>Copied</p>

        })
        navigator.clipboard.writeText(location);
    }


    let vacancy = data.vacancy;
    let lang = data.trans_text;
    return (
        <DocumentMeta {...meta}>
            <Layout>
                <div className="show_vacancy_page">
                    <Showcase1 bgSrc="url(/images/sc-bgs/vacancy-bg.png)"/>
                    <div className="wrapper flex">
                        <div dangerouslySetInnerHTML={{__html: vacancy.content}} className="content">

                        </div>
                        <div className="details">
                            <VacDetails imgNum="2" text1="Field" text2={vacancy.field}/>
                            <VacDetails imgNum="3" text1="experience" text2={vacancy.experience}/>
                            <VacDetails imgNum="4" text1="Location" text2={vacancy.location}/>
                            <VacDetails imgNum="5" text1="Commitment" text2={vacancy.commitment}/>
                            <VacDetails imgNum="6" text1="Salary" text2={vacancy.salary}/>
                            <button className="button apply" onClick={() => toggleAppForm()}>
                                Apply Now
                            </button>
                            <button onClick={copyToClipboard} className="button">
                                <img ref={share} src="/images/icons/vacancy/7.svg" alt=""/> Share
                            </button>
                        </div>
                    </div>
                    <div
                        className={appForm ? "form_background show" : "form_background "}
                        onClick={() => toggleAppForm()}
                    ></div>
                    <ApplicationForm
                        id={vacancy.id}
                        fClass={appForm ? "application_form open" : "application_form"}
                        closeBtn={() => toggleAppForm()}
                    />
                </div>
            </Layout>
        </DocumentMeta>
    );
};

export default ShowVacancy;
