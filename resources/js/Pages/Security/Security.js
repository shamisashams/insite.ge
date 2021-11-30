import React from "react";
import Form from "../../Components/Form/Form";
import Showcase2 from "../../Components/Showcase2/Showcase2";
import Title1 from "../../Components/Title1";
import { CheckedBox } from "../RemoteWork/Objects/Objects";
import "./Security.css";
import SecurityBox from "./SecurityBox/SecurityBox";
import Layout from "../../Layouts/Layout";
import Meta from "../Meta/Meta";
import DocumentMeta from "react-document-meta";

const Security = () => {
    const meta = Meta(
        "Insite - ქსელური უსაფრთხოება",
        "ქსელური უსაფრთხოება, ქსელი, ოფისი, ოფისის დაქსელვა, უსაფრთხო ქსელი, ქსელის დაცვა.",
        "ჩვენ დაგეხმარებით უსაფრთხო კორპორატიული ქსელის დაგეგმვასა და იმპლემენტაციაში."
    );

    return (
        <DocumentMeta {...meta}>
            <Layout>
                <div className="security_page">
                    <div
                        className="showcase"
                        style={{
                            background: "url(/images/security/1.png) no-repeat",
                        }}
                    >
                        <div className="wrapper">
                            <Showcase2
                                title="ქსელური უსაფრთხოება"
                                para1="ჩვენ შემოგთავაზებთ ქსელური არქიტექტურის დიზაინს, რომელიც იქნება იდეალური და დაცული თქვენი კონკრეტული მოთხოვნებისთვის."
                                href="/contact"
                            />
                        </div>
                    </div>
                    <p className="wrapper paragraph op06">თავდამსხმელები იყენებენ მრავალ ხრიკს და ტექნიკას სხვადასხვა კომპანიების შიდა ქსელში შესაღწევად, სოციალური ინჟინერიის ტექნიკიდან დაწყებული პროგრამული უზრუნველყოფის სისუსტეების გამოყენებით დამთავრებული. კორპორატიული ქსელის და კრიტიკული მონაცემების დაცულობის უზრუნველსაყოფად გამოიყენება სხვადასხვა აპარატური და პროგრამული გადაწყვეტილებები. ეს გადაწყვეტილებები მოიცავს პროგრამულ დაცვას და წვდომის კონტროლის მექანიზმებს, Firewall სისტემებს, VPN-ებს, გატეხვის პრევენციის სისტემებს, ანტივირუსულ პროგრამულ უზრუნველყოფას და მრავალ სხვას.</p>
                    <div
                        className="main_content"
                        style={{
                            background: "url(/images/security/2.png) no-repeat",
                        }}
                    >
                        <div className="wrapper">
                            <Title1 head="სარგებელი ბიზნესისთვის" />
                            <div className="grid">
                                <SecurityBox
                                    icon="1"
                                    para="წვდომის და კონფედენციალური მონაცემების გადაცემის კონტროლი "
                                />
                                <SecurityBox
                                    icon="2"
                                    para="დაცვა მიზანმიმართული თავდასხმებისგან (APT)"
                                />
                                <SecurityBox
                                    icon="3"
                                    para="უსაფრთხოების რისკების და რეპუტაციული დილემების შემცირება"
                                />
                                <SecurityBox
                                    icon="4"
                                    para="ინფორმაციული უსაფრთხოების დეპარტამენტის ოპერატიულობა"
                                />
                                <SecurityBox
                                    icon="5"
                                    para="აღჭურვილობაზე დატვირთვის შემცირება ფილტრაციისა და ავტომატიზაციის გზით"
                                />
                                <SecurityBox
                                    icon="6"
                                    para="თანამშრომლების მუშაობის ეფექტურობის ზრდა"
                                />
                            </div>
                            <Title1 head="აუთსორსინგის უპირატესობა" />
                            <div className="checks">
                                <CheckedBox text="არ არის საჭირო ძვირადღირებული თანამშრომლების აყვანა." />
                                <CheckedBox text="არ არის საჭირო ტექნიკურ ასპექტებში გარკვევა და სისტემის პრობლემების დამოუკიდებლად მოგვარება." />
                                <CheckedBox text="აპრობირებული გადაწყვეტილებების გამოყენება, სხვადასხვა კანონმდებლობის გათვალისწინებით." />
                                <CheckedBox text="აუთსორსინგის ღირებულება მეტწილად ნაკლებია ვიდე საკუთარი სპეციალისტების ყოლა ყველა საჭირო მიმართულებით." />
                                <CheckedBox text="სერვისების და მომსახურებების მკაფიო ჩამონათვალი და მუშაობა კონტრაქტის ფარგლებში" />
                            </div>
                        </div>
                    </div>
                    <div className="wrapper">
                        <Form title="დაგვიტოვეთ შეტყობინება" />
                    </div>
                </div>
            </Layout>
        </DocumentMeta>
    );
};

export default Security;
