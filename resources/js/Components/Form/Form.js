import React, {useState} from "react";
import Text35 from "../Text35";
import "./Form.css";
import {Inertia} from "@inertiajs/inertia";
import {locale_route} from "../../Pages/Helpers/locale_route";
import {usePage} from "@inertiajs/inertia-react";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const Form = ({title, para}) => {
    const [values, setValues] = useState({
        name: "",
        mail: "",
        message: "",
    });
    const {flash} = usePage().props;
    const MySwal = withReactContent(Swal)
    let [buttonDisabled, setButtonDisabled] = useState(false)

    if (flash.success) {
        MySwal.fire({
            icon: 'success',
            title: <p style={{textAlign: 'center'}}>{flash.success}</p>,
        })
        flash.success = false;
    }

    function handleSubmit(e) {
        e.preventDefault();
        setButtonDisabled(true);
        Inertia.post('/contact-us', values, {
            onSuccess: (page) => {
                setValues(values => ({
                    ...values,
                    ['name']: "",
                    ['mail']: "",
                    ['message']: "",
                }))
            },
            onFinish: () => {
                setButtonDisabled(false);
            },
            preserveScroll: true

        })
    }

    const {errors} = usePage().props;
    const {locale} = usePage().props;

    function handleChange(e) {
        const key = e.target.id;
        let value = e.target.value

        setValues(values => ({
            ...values,
            [key]: value,
        }))
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <Text35 text={title}/>
            <p className="op06">{para}</p>
            <div className="inputs flex">
                <input id="name" type="text" required placeholder="Имя" value={values.name} onChange={handleChange}/>
                {/*{errors.name && <div className="error-block">{errors.name}</div>}*/}
                <input id="mail" type="email" required placeholder="E-mail" value={values.mail}
                       onChange={handleChange}/>
                {/*{errors.mail && <div className="error-block">{errors.mail}</div>}*/}
            </div>
            <textarea id="message" required placeholder="сообщение" onChange={handleChange}
                      value={values.message}></textarea>
            {/*{errors.message && <div className="error-block">{errors.message}</div>}*/}

            <button disabled={buttonDisabled} className="form_btn">
                <span>Submit</span>
            </button>
        </form>
    );
};

export default Form;
