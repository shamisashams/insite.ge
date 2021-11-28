import React from "react";
import Form from "../../Components/Form/Form";
import Showcase2 from "../../Components/Showcase2/Showcase2";
import Map from "../../Components/Map";
import "./Contact.css";
import Layout from "../../Layouts/Layout";
import DocumentMeta from 'react-document-meta';
import Meta from "../Meta/Meta";

const Contact = () => {
    const meta = Meta('Insite - კონტაქტი', 'keyword', 'description');

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
                                title="კონტაქტი"
                                para1="შეკითხვები გაქვთ?"
                                para2="ჩვენ ყოველთვის მზად ვართ დაგეხმაროთ."
                            />
                            <div className="offices flex">
                                <div className="each_office">
                                    <div className="title op06">მოსკოვის ოფისი</div>
                                    <div className="flex">
                                        <div className=" info flex">
                                            <img src="images/icons/contact/1.svg" alt=""/>
                                            <div>
                                            Г. Москва, Пресненская наб., <br/>
                                            6, стр. 2 ЦАО
                                            </div>
                                        </div>
                                        <div className=" info flex">
                                            <img src="images/icons/contact/2.svg" alt=""/>
                                            <div>+79684683745</div>
                                        </div>
                                        <div className=" info flex">
                                            <img src="images/icons/contact/3.svg" alt=""/>
                                            <div>hello@insite.dev</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="each_office">
                                    <div className="title op06">თბილისის ოფისი</div>
                                    <div className="flex">
                                        <div className=" info flex">
                                            <img src="images/icons/contact/1.svg" alt=""/>
                                            <div>
                                            ჟიული შარტავას ქ. 40, <br/>
                                            თბილისი
                                            </div>
                                        </div>
                                        <div className=" info flex">
                                            <img src="images/icons/contact/2.svg" alt=""/>
                                            <div>(+995 32) 2-11-10-19</div>
                                        </div>
                                        <div className=" info flex">
                                            <img src="images/icons/contact/3.svg" alt=""/>
                                            <div>hello@insite.international</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="main wrapper flex">
                        <Form
                            title="დაგვიტოვეთ შეტყობინება"
                            para="გთხოვთ დატოვოთ თქვენი საკონტაქტო ინფორმაცია და ჩვენ დაგიკავშირდებით თქვენთვის მოსახერხებელი მეთოდით. ჩვენი გუნდი ყოველთვის მზადაა დაგეხმაროთ!"
                        />
                        <div className="flex maps">
                            <div>
                                <h6>გვიპოვეთ მოსკოვში</h6>
                                <div className="map">
                                    <Map/>
                                </div>
                            </div>
                            <div>
                                <h6>გვიპოვეთ თბილისში</h6>
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
