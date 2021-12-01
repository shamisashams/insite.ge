import React from "react";
import Form from "../../Components/Form/Form";
import Showcase2 from "../../Components/Showcase2/Showcase2";
import Text35 from "../../Components/Text35";
import { Impacts, PortBox } from "./Boxes/Boxes";
import "./Virtualization.css";
import Layout from "../../Layouts/Layout";
import Meta from "../Meta/Meta";
import DocumentMeta from "react-document-meta";

const Virtualization = () => {
    const meta = Meta(
        "Insite – ვირტუალიზაცია",
        "ვირტუალიზაცია, vshpere, vmware, esxi, proxmox, vcenter, კონფიგურაცია vmware, კონფიგურაცია esxi",
        "ჩვენ დაგეხმარებით სხვადასხვა ტიპის ვირუტალიზაციის დაწყობასა და გაშვებაში."
    );

    return (
        <DocumentMeta {...meta}>
            <Layout>
                <div className="virtualization_page">
                    <div
                        className="showcase"
                        style={{
                            background: "url(/images/virtual/1.png) no-repeat",
                        }}
                    >
                        <div className="wrapper flex center">
                            <Showcase2
                                title="ვირტუალიზაცია"
                                subtitle="ვირტუალიზაცია არის სერვერის ან კომპიუტერული სისტემის ვირტუალური ვერსიის შექმნის პროცესი, პროგრამული უზრუნველყოფის გამოყენებით (და არა აპარატული რესურსების ხარჯზე). ეს საშუალებას აძლევს რამდენიმე ოპერაციულ სისტემას ერთდროულად იმუშაოს ერთ მანქანაზე."
                                href="/contact"
                            />
                        </div>
                    </div>
                    <div className="impact_sec wrapper">
                        <Text35 text="მონაცემთა ანალიზი: ვირტუალიზაციის სერვისის გავლენა ბიზნესზე" />
                        <div className="grid">
                            <Impacts
                                impClass="a"
                                icon="1"
                                rate="50%"
                                para="აღჭურვილობისა და საოპერაციო ხარჯების პოტენციური შემცირება"
                            />
                            <Impacts
                                impClass="b"
                                icon="2"
                                rate="10-20"
                                para="ელემენტების რაოდენობის ზრდა, რომელთა დამუშავებაც შეუძლია ვირტუალურ მანქანას"
                            />
                            <Impacts
                                impClass="c"
                                icon="3"
                                rate="80%"
                                para="თითოეული ცალკეული სერვერის ეფექტურობის შესაძლო გამოყენება"
                            />
                            <Impacts
                                impClass="d"
                                icon="4"
                                rate="12-18%"
                                para="სამუშაო დატვირთვის მოცულობის ზრდა, რომელიც ვირტუალიზაციას შეუძლია შემოგვთავაზოს"
                            />
                            <Impacts
                                impClass="e"
                                icon="5"
                                rate="75%"
                                para="ელექტროენერგიის ხარჯების შემცირება ვირტუალიზაციის მეშვეობით"
                            />
                            <Impacts
                                impClass="f"
                                icon="6"
                                rate="63-74%"
                                para="პოტენციური დანაზოგი, რომელსაც გთავაზობთ ვირტუალიზაცია ფიზიკურ სერვერებზე"
                            />
                        </div>
                    </div>
                    <div className="portfolio_sec wrapper">
                        <img src="/images/virtual/2.png" alt="" />
                        <h3>ჩვენი საკონსულტაციო სერვისების პორტფოლიო მოიცავს:</h3>
                        <PortBox
                            bg="#F5F5F5"
                            icon="7"
                            head="აპლიკაციის ვირტუალიზაცია"
                            para="აქ ხდება აპლიკაციების ვირტუალიზაცია და სერვერიდან საბოლოო მომხმარებლის მოწყობილობამდე მიწოდება."
                        />
                        <PortBox
                            icon="8"
                            head="დესკტოპის ვირტუალიზაცია"
                            para="ეს არის ტექნიკა, რომელიც ყოფს დესკტოპ კომპიუტერის გარემოს ფიზიკური კომპიუტერისგან. ეს ტექნიკა ძირითადად გამოიყენება დატა ცენტრებში, სადაც თითოეული მომხმარებლისთვის პერსონალიზებული დესკტოპი განთავსებულია დატა ცენტრის სერვერზე."
                        />
                        <PortBox
                            bg="#F5F5F5"
                            icon="9"
                            head="აპარატურის ვირტუალიზაცია"
                            para="ეს არის კომპიუტერებისა და ოპერაციული სისტემების ვირტუალური ვერსიების შექმნას. ეს მეთოდი მიზნად ისახავს სხვადასხვა ოპერაციული სისტემის გაშვებას ერთსა და იმავე აპარატურაზე და საშუალებას აძლევს მრავალ მომხმარებელს/პროცესს ერთდროულად გამოიყენოს ერთი გამომთვლელი სიმძლავრე."
                        />
                        <PortBox
                            icon="10"
                            head="ქსელის ვირტუალიზაცია"
                            para="ეს ეხება ქსელში არსებული რესურსების გაერთიანების მეთოდს ხელმისაწვდომი ტრაფიკის დამოუკიდებელ არხებად დაყოფის გზით, რომელთაგან თითოეული შეიძლება მიებას კონკრეტულ სერვერს ან მოწყობილობას რეალურ დროში."
                        />
                        <PortBox
                            bg="#F5F5F5"
                            icon="11"
                            head="ოპერაციული სისტემის ვირტუალიზაცია"
                            para="ეს საშუალებას აძლევს ორგანიზაციებს ჰქონდეთ ერთი სერვერი, რომელსაც შეუძლია მრავალი ოპერაციული სისტემის გაშვება, ნაცვლად იმისა, რომ ჰქონდეს გამოყოფილი სერვერი თითოეული ოპერაციული სისტემისთვის."
                        />
                        <PortBox
                            icon="12"
                            head="სერვერის ვირტუალიზაცია"
                            para="ეს არის ერთი ფიზიკური სერვერის მრავალ ვირტუალურ სერვერად დაყოფის მეთოდი, რომელთაგან თითოეული ამუშავებს საკუთარ ოპერაციულ სისტემას, აპლიკაციებს და ფუნქციონირებს როგორც დამოუკიდებელი სერვერი."
                        />
                        <PortBox
                            bg="#F5F5F5"
                            icon="13"
                            head="მეხსიერების ვირტუალიზაცია"
                            para="ეს არის ფიზიკური მეხსიერების იმგვარი დაჯგუფების პროცესი, როდესაც სხვადასხვა ლოკაციებში არსებული მეხსიერების შემნახველი მოწყობილობები მუშაობენ როგორც ერთი."
                        />
                        <Form title="დაგვიტოვეთ შეტყობინება" />
                    </div>
                </div>
            </Layout>
        </DocumentMeta>
    );
};

export default Virtualization;
