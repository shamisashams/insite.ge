import React, {useState} from "react";
import {Inertia} from '@inertiajs/inertia'
import {locale_route} from "../Helpers/locale_route";
import {usePage} from '@inertiajs/inertia-react'
import './Vacancies.css';

const ApplicationForm = ({fClass, closeBtn, id}) => {
    const [values, setValues] = useState({
        fullname: "",
        email: "",
        phone: "",
        portfolio_link: "",
        resume: "",
        file: ""
    });
    const {errors} = usePage().props

    const {locale} = usePage().props;


    function handleChange(e) {
        const key = e.target.id;
        let value;
        e.target.id === "file" ? value = e.target.files[0] : value = e.target.value

        setValues(values => ({
            ...values,
            [key]: value,
            id: id
        }))
    }

    function handleSubmit(e) {
        e.preventDefault()
        Inertia.post( '/save-request', values, {preserveScroll: true})
    }

    return (
        <div className={fClass}>
            <div className="title">Apply For The Job</div>
            <form onSubmit={handleSubmit} className="input_fields">
                <label>Full Name*</label>
                <input id="fullname" type="text" value={values.fullname} onChange={handleChange}/>
                {errors.fullname && <div className="error-block">{errors.fullname}</div>}
                <label>Email*</label>
                <input id="email" type="text" value={values.email} onChange={handleChange}/>
                {errors.email && <div className="error-block">{errors.email}</div>}
                <label>Phone*</label>
                <input id="phone" type="text" value={values.phone} onChange={handleChange}/>
                {errors.phone && <div className="error-block">{errors.phone}</div>}
                <label>Portfolio Link</label>
                <input id="portfolio_link" type="text" value={values.portfolio_link} onChange={handleChange}/>
                {errors.portfolio_link && <div className="error-block">{errors.portfolio_link}</div>}
                <label>Resume*</label>
                <div className="input">
                    <input type="file" id="file"
                           onChange={handleChange}/>
                    <button className="attach">
                        <img src="/images/icons/vacancy/8.svg" alt=""/>
                    </button>
                </div>
                <input type="submit" value="Submit Application"/>
            </form>
            <button className="close" onClick={closeBtn}>
                <img src="/images/icons/vacancy/close.svg" alt=""/>
            </button>
        </div>
    );
};

export default ApplicationForm;
