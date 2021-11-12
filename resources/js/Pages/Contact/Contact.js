import React from "react";
import Form from "../../Components/Form/Form";
import Showcase2 from "../../Components/Showcase2/Showcase2";
import Map from "../../Components/Map";
import "./Contact.css";
import Layout from "../../Layouts/Layout";
import DocumentMeta from 'react-document-meta';
import Meta from "../Meta/Meta";

const Contact = () => {
    const meta = Meta('Some Meta Title', 'keyword', 'description');

    return (
        <DocumentMeta {...meta}>
            <Layout>
                <div className="contact_page">
                    <div
                        className="showcase"
                        style={{background: "url(images/contact/1.png) no-repeat"}}
                    >
                        <div className="wrapper">
                            <Showcase2
                                title="Контакт"
                                para1="У вас есть вопросы? "
                                para2="Мы всегда рады вам помочь."
                            />
                            <div className="offices flex">
                                <div className="each_office">
                                    <div className="title op06">MosCOW OFFICE</div>
                                    <div className="flex">
                                        <div className=" info flex">
                                            <img src="images/icons/contact/1.svg" alt=""/>
                                            <div>
                                                1604 Virginia Street. <br/>
                                                Moscow, Russia
                                            </div>
                                        </div>
                                        <div className=" info flex">
                                            <img src="images/icons/contact/2.svg" alt=""/>
                                            <div>0322 2 13 22 33</div>
                                        </div>
                                        <div className=" info flex">
                                            <img src="images/icons/contact/3.svg" alt=""/>
                                            <div>hello@insite.com</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="each_office">
                                    <div className="title op06">Tbilisi OFFICE</div>
                                    <div className="flex">
                                        <div className=" info flex">
                                            <img src="images/icons/contact/1.svg" alt=""/>
                                            <div>
                                                1604 Virginia Street. <br/>
                                                Tbilisi, Georgia
                                            </div>
                                        </div>
                                        <div className=" info flex">
                                            <img src="images/icons/contact/2.svg" alt=""/>
                                            <div>0322 2 13 22 33</div>
                                        </div>
                                        <div className=" info flex">
                                            <img src="images/icons/contact/3.svg" alt=""/>
                                            <div>hello@insite.com</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main wrapper flex">
                        <Form
                            title="Оставьте нам записку"
                            para="Вы можете позвонить, написать или записаться для визита в один из наших офисов."
                        />
                        <div className="flex maps">
                            <div>
                                <h6>Find us in Moscow</h6>
                                <div className="map">
                                    <Map/>
                                </div>
                            </div>
                            <div>
                                <h6>Find us in Tbilisi</h6>
                                <div className="map">
                                    <Map/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </DocumentMeta>
    );
};

export default Contact;
