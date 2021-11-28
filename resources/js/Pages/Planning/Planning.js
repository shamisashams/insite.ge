import React from "react";
import Showcase2 from "../../Components/Showcase2/Showcase2";
import Title1 from "../../Components/Title1";
import Form from "../../Components/Form/Form";
import "./Planning.css";
import Layout from "../../Layouts/Layout";
import Meta from "../Meta/Meta";
import DocumentMeta from 'react-document-meta';

const Planning = () => {
    const meta = Meta('Insite - დაგეგმარება', 'keyword', 'description');

    return (
        <DocumentMeta {...meta}>
            <Layout>
                <div className="planning_page">
                    <div
                        className="showcase"
                        style={{background: "url(/images/plan/1.png) no-repeat"}}
                    >
                        <div className="wrapper">
                            <Showcase2
                                title="დაგეგმარება"
                                subtitle="ციფრული და ქსელური პროეტების დაგეგმარების სერვისი"
                                para1="დაგეგმვის სერვისების სარგებელის სათანადოდ შეფასება ძალიან რთულია, ვინაიდან იდეის წარდგენის მომენტიდან, მისი განხორციელება მოითხოვს საფუძვლიან შესწავლას. შექმნის ეტაპზე დაგეგმვა ყველაზე მნიშვნელოვანია იმისთვის, რომ დადგინდეს, აკმაყოფილებს თუ არა კლიენტის მიერ შემოთავაზებული იდეა კლიენტის მოთხოვნებს და როგორ შეიძლება იდეის განვითარება/გაუმჯობესება."
                            />
                        </div>
                    </div>
                    <div className="wrapper main">
                        <Title1
                            head="დაგეგმვის ეტაპი - უპირატესობა დეველოპმენტში"
                            para="კლიენტების საჭიროებების შესწავლა ხდება მოლაპარაკებების, დისკუსიებისა და შეხვედრების დროს. დაგეგმვის სერვისებმა შეიძლება გამოიწვიოს მრავალი ცვლილება კლიენტის თავდაპირველ იდეებში, რომლებიც ყოველთვის მკვეთრად უმჯობესდება დიზაინერების, მენეჯერებისა და ტექნიკური ლიდერების მიერ. როგორც კომპანიის პროფესიონალები, ასევე კლიენტი სარგებლობენ დაგეგმვის ფაზიდან, რადგან დასახულია მკაფიო მოთხოვნები, განიხილება ფუნქციები, ცნობილია ბიუჯეტი და დადგენილია ვადები. დაგეგმვა მოიცავს გარანტირებულ მხარდაჭერას კომპანიის პროფესიონალებისგან, რათა დაგეხმაროთ პროდუქტის ფუნქციონირების ოპტიმიზაციაში და ტექნიკური მოთხოვნების შეფასებაში. კლიენტი არა მხოლოდ ჩართულია პროექტში მისი დაგეგმვის პროცესში არამედ იცის მსვლელობის პროცესი და დარჩენილი დავალებები."
                        />
                        <strong>პროდუქტის შექმნის დაგეგმვის პროცესი</strong>
                        <img className="steps" src="/images/plan/2.png" alt=""/>
                        <Form title="დაგვიტოვეთ შეტყობინება"/>
                    </div>
                </div>
            </Layout>
        </DocumentMeta>
    );
};

export default Planning;
