import React from "react";
import Form from "../../Components/Form/Form";
import InLink from "../../Components/InLink";
import Showcase2 from "../../Components/Showcase2/Showcase2";
import Text35 from "../../Components/Text35";
import {BoxOne, BoxTwo, CheckedBox} from "./Objects/Objects";
import "./RemoteWork.css";
import Layout from "../../Layouts/Layout";
import Meta from "../Meta/Meta";
import DocumentMeta from 'react-document-meta';

const RemoteWork = () => {
    const meta = Meta('Insite - დისტანციური მუშაობა', 'თანამშრომლების გადაყვანა დისტანციურ მუშაობაზე, დისტანციური მუშაობა, გადასვლა რემოუთად, რემოუთად მუშაობა', 'თუ გსურთ გადაიყვანოთ თქვენი თანამშრომლები დისტანციურ მუშაობაზე და ეფექტურობის დაკარგვის გარეშე, ჩვენი კომპანია დაგეხმარებათ ყველა საჭირო პროცედურის გავლაში.');

    return (
        <DocumentMeta {...meta}>
            <Layout>
                <div className="remote_page">
                    <div
                        className="showcase"
                        style={{background: "url(/images/remote/1.png) no-repeat "}}
                    >
                        <div className="wrapper">
                            <Showcase2
                                title="დისტანციური მუშაობა"
                                para1="გადაიყვანეთ კომპანია დისტანციურ მუშაობაზე ეფექტურობის დაკარგვის გარეშე."
                            />
                            <Form title="დაგვიტოვეთ შეტყობინება"/>
                        </div>
                    </div>
                    <div className="wrapper main">
                        <div className="flex first_boxes">
                            <BoxOne
                                title="შეინარჩუნეთ ეფექტურობა"
                                para="შექმენით ვირტუალური ოფისი და მიეცით დისტანციურ თანამშრომლებს წვდომა ყველა ფაილზე, მონაცემთა ბაზაზე და კომპანიის პროგრამულ უზრუნველყოფაზე."
                            />
                            <BoxOne
                                title="იმუშავეთ შეუზღუდავად"
                                para="იმუშავეთ საჭირო პროგრამებთან დისტანციურად. ჩვენი ექსპერტები დაგეხმარებიან ყველა საჭირო სისტემის დაყენებასა და სამუშაო პროცესის დალაგებაში."
                            />
                            <BoxOne
                                title="აკონტროლეთ სამუშაო"
                                para="მიიღეთ ინფორმაცია კომპანიის მუშაობის შესახებ ერთ ფანჯარაში."
                            />
                        </div>
                        <Text35 text="დისტანციურ სამუშაოზე გადასვლის ძირითადი უპირატესობები"/>
                        <div className="box2_flex flex">
                            <div className="column">
                                <BoxTwo icon="1" text="ეკონომია "/>
                                <InLink
                                    text="სამუშაო ადგილის, საოფისე ინვენტარის და ტექნიკის ღირებულების შემცირება.."/>
                                <InLink text="დანაზოგი ფართზე."/>
                                <InLink text="დროის ეკონომია."/>
                            </div>
                            <div className="column">
                                <BoxTwo icon="2" text="უსაფრთხოება"/>
                                <InLink text="პერსონალური მონაცემების შენახვის უსაფრთხოება და დაცვა."/>
                                <InLink
                                    text="მომხმარებლის ქმედებებისგან გამოწვეული პრობლემების თავიდან აცილება."/>
                            </div>
                            <div className="column">
                                <BoxTwo icon="3" text="კონტროლი"/>
                                <InLink text="თანამშრომლების ქმედებების სრული კონტროლი მენეჯერების და ხელმძღვანელობის მხრიდან."/>
                            </div>
                            <div className="column">
                                <BoxTwo icon="4" text="ვირტუალიზაცია"/>
                                <InLink text="მუშაობა დისტანციური ჩართვის გამოყენებით."/>
                                <InLink text="ეკონომია საოფისე აპარატურაზე."/>
                            </div>
                        </div>
                        <Text35 text="დისტანციურ სამუშაოზე გადასვლით თქვენ გეძლევათ შესაძლებლობა:"/>
                        <div className="check_grid">
                            <CheckedBox text="ფორსმაჟორული სიტუაციების შემთხვევაში დანაკარგის მინიმიზირება"/>
                            <CheckedBox text="შეინარჩუნეთ კონფიდენციალობა და კომერციული საიდუმლო"/>
                            <CheckedBox text="დანაზოგი ლიცენზირებულ პროგრამებზე"/>
                            <CheckedBox text="თანამშრომლების მონიტორინგი (სამუშაო საათები და აქტივობები)"/>
                            <CheckedBox text="გამოიყენეთ ერთიანი მონაცემთა ბაზა ინფორმაციის შესანახად"/>
                            <CheckedBox text="დაზოგეთ ოფისის მაკომპლექტებელებზე"/>
                            <CheckedBox text="სხვადასხვა ქვეყნებიდან თანამშრომლების აყვანის საშუალება"/>
                            <CheckedBox text="დაიცავით თანამშრომლების მონაცემები"/>
                            <CheckedBox text="დროის ეკონომია სამუშაო სივრცის მოწყობაზე"/>
                        </div>
                    </div>
                    <div
                        className="form_sec"
                        style={{background: "url(/images/remote/2.png) no-repeat"}}
                    >
                        <div className="wrapper">
                            <Form title="დაგვიტოვეთ შეტყობინება"/>
                        </div>
                    </div>
                </div>
            </Layout>
        </DocumentMeta>
    );
};

export default RemoteWork;
