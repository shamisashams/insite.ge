import React, {useState, useRef} from "react";
import Button2 from "../../../Components/Button2/Button2";
import Title1 from "../../../Components/Title1";
import {CostBtn} from "../CostSteps/CostBox";
import CostTable from "./CostTable";
import "./ResultEstimate.css";
import Layout from "../../../Layouts/Layout";
import {Inertia} from '@inertiajs/inertia'
import {Link, usePage} from '@inertiajs/inertia-react'
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import Meta from "../../Meta/Meta";
import DocumentMeta from 'react-document-meta';

const ResultEstimate = ({data, totalPrice, totalEndPrice, totalStartTime, totalEndTime, requestData}) => {
    const meta = Meta('Insite - კალკულატორი', 'საიტის ფასი, საიტის შექმნა, საიტის შექმნის ფასი, ვებ აპლიკაციის ფასი, საიტის კალკულატორი', 'გინდათ სწრაფად გაიგოთ რა დაგიჯდებათ საიტი ან ვებ აპლიკაცია? გამოიყენეთ ჩვენი მარტივი ონლაინ კალკულატორი და მიიღეთ აპლიკაციის შექმნის ღირებულების და დროის მოსალოდნელი ჩარჩო.');
    const {errors, flash} = usePage().props;
    const [request, setRequest] = useState(false);
    let [name, setName] = useState('')
    let [email, setEmail] = useState('')
    let [phone, setPhone] = useState('')
    let idRef = useRef('')
    let [projectId, setProjectId] = useState('');
    let [buttonDisabled, setButtonDisabled] = useState(false)
    let [disableSendRequestButton, setDisableSendRequestButton] = useState(false)

    const toggleRequest = (e) => {
        if (e.target.id == 'send-request' && data.length > 0) {
            setDisableSendRequestButton(true);
            Inertia.post('/services/calculator-save', {
                data,
                totalPrice,
                totalEndPrice,
                time: totalStartTime + "-" + totalEndTime,
            }, {
                onFinish: () => {
                    projectId = idRef.current.value;
                    setProjectId(projectId);
                    setRequest(!request);
                    setDisableSendRequestButton(false);
                }
            })
        } else if (data.length > 0) {
            setRequest(!request);
        }
    };
    const downloadPdf = () => {
        fetch(`/download-pdf?projectId=${projectId}`).then(response => response.json())
            .then(data => {
                let link = document.createElement('a');
                link.href = data;
                link.download = "cost_calculator.pdf";
                link.click();
            })
    }

    const MySwal = withReactContent(Swal)

    const sendEmail = (e) => {
        let sendData = {
            name,
            email,
            phone,
            data,
            projectId,
            totalPrice,
            totalStartTime,
            totalEndTime
        }
        setButtonDisabled(true);
        Inertia.post('/services/calculator/send-email', sendData, {
            onSuccess: () => {
                MySwal.fire({
                    icon: 'success',
                    title: <p style={{textAlign: 'center'}}>თქვენი მოთხოვნა გაგზავნილია</p>,
                })
                setRequest(!request);
                name = "";
                email = "";
                phone = "";
                setName(name);
                setEmail(email);
                setPhone(phone);
            },
            onFinish: () => {
                setButtonDisabled(false);
            },
        })
    }

    return (
        <DocumentMeta {...meta}>
            <Layout>
                <>
                    <div
                        className="result_page "
                        style={{background: "url(/images/calculator/bg.png)"}}
                    >
                        <div className="wrapper">

                        
                        
                        <Title1

                            head="თქვენი კალკულაციის შედეგი"
                            para="გთხოვთ გაითვალისწინოთ რომ ეს კალკულაცია არის მიახლოებით. ფასი და დრო შეიძლება შეიცვალოს თქვენი მოთხოვნებიდან გამომდინარე."
                        />
                        <div className="tables">
                            <CostTable features={data} totalPrice={totalPrice} totalStartTime={totalStartTime}
                                       totalEndTime={totalEndTime}/>
                        </div>
                        <div className="flex btm_btns">
                            <button disabled={disableSendRequestButton} onClick={(e) => toggleRequest(e)}
                                    className="dl_pdf flex center">
                                <img src="/images/calculator/pdf.svg" alt=""/>
                                <span id="send-request" className="op06">PDF-ს გადმოწერა</span>
                            </button>
                            <div className="flex">
                                <Button2 large text="ცვლილება"
                                         href={'/services/calculator?state=' + encodeURI(requestData) + "&totalPrice=" + totalPrice}/>
                                <CostBtn disabled={disableSendRequestButton} id="send-request" large
                                         text="მოთხოვნის გაგზავნა"
                                         click={(e) => toggleRequest(e)}/>
                            </div>
                        </div>
                    </div>
                    <div
                        onClick={(e) => toggleRequest(e)}
                        className={request ? "request_background shown" : "request_background"}
                    ></div>
                    <div className={request ? "request_popup open" : "request_popup"}>
                        <button className="close" onClick={(e) => toggleRequest(e)}>
                            <img src="/images/calculator/close.svg" alt=""/>
                        </button>
                        <div className="title">მადლობას გიხდით მოთმინებისთვის.</div>
                        <p>გთხოვთ შეავსოთ თქვენი საკონტაქტო ინფორმაცია და ჩვენ მალე დაგიკავშირდებით.</p>
                        <input required value={name} onChange={e => setName(event.target.value)} type="text"
                               placeholder="სახელი"/>
                        <p style={{width: "100%", marginBottom: "auto", color: 'red'}}>{errors.name && errors.name}</p>
                        <input required value={email} onChange={e => setEmail(event.target.value)} type="text"
                               placeholder="E-mail"/>
                        <p style={{
                            width: "100%",
                            marginBottom: "auto",
                            color: 'red'
                        }}>{errors.email && errors.email}</p>
                        <input required value={phone} onChange={e => setPhone(event.target.value)} type="tel"
                               placeholder="ტელეფონის ნომერი"/>
                        <input hidden ref={idRef} readOnly value={flash.id ?? ""}/>
                        <p style={{
                            width: "100%",
                            marginBottom: "auto",
                            color: 'red'
                        }}>{errors.phone && errors.phone}</p>
                        <CostBtn disabled={buttonDisabled} id="send-email" click={(e) => sendEmail(e)} large
                                 text="გამომიგზავნეთ"/>
                        <CostBtn style={{marginTop: "0px"}} click={(e) => downloadPdf()} large
                                 text="PDF-ის გადმოწერა"/>

                        <Link to="/">ვებ საიტზე დაბრუნება</Link>
                    </div>
                    </div>
                </>
            </Layout>
        </DocumentMeta>
    );
};

export default ResultEstimate;
