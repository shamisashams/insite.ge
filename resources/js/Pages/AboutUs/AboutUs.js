import React from "react";
import Form from "../../Components/Form/Form";
import Showcase1 from "../../Components/Showcase1/Showcase1";
import Text35 from "../../Components/Text35";
import "./AboutUs.css";
import Layout from "../../Layouts/Layout";
import DocumentMeta from 'react-document-meta';
import Meta from "../Meta/Meta";

const AboutUs = () => {
    const meta = Meta('Insite - კომპანიის შესახებ', 'keyword', 'description');
    return (
        <DocumentMeta {...meta}>
            <Layout>
                <div className="about_us_page">
                    <Showcase1
                        bgSrc="url(/images/aboutus/sc-bg.png)"
                        color="#272639"
                        head="კომპანიის შესახებ"
                        fontFamily="book"
                    />
                    <div
                        className="about_content"
                        style={{
                            background: "url(/images/aboutus/ct-bg.png) no-repeat",
                            backgroundPosition: "center bottom",
                        }}
                    >
                        <div className="wrapper">
                            <div className="block block1">
                                <Text35
                                    text="Insite International - საერთაშორისო კომპანია ციფრული გადაწყვეტილებების შემუშავებისა და დანერგვისთვის"/>
                                <p className="op06">Insite International დაარსდა ენთუზიასტი პროგრამისტების ჯგუფის მიერ 2014 წელს. დასაწყისში კომპანია დაკავებული იყო ვებ აპლიკაციების შემუშავებით. მალევე საქმიანობის სფერო გაფართოვდა და მალე კომპანიამ დაიწყო სერვისების მიწოდება საბროკერო კომპანიებისთვის და დაიწყო არსებული ციფრული სავაჭრო პლატფორმის მოდერნიზება მსხვილ IT კომპანიებთან ერთად, როგორიცაა IBM, Microsoft, Amazon და სხვა.</p>
                                <p className="op06">მომდევნო წლებში კომპანია გაფართოვდა, რამაც მას საშუალება მისცა, მიეწოდებინა მომსახურება IT-ის სხვადასხვა სფეროებში. ასე, მაგალითად, Covid-19-ის პანდემიის დაწყების შემდეგ, 2020 წლიდან, ჩვენმა სპეციალისტებმა უზრუნველყვეს სხვადასხვა კომპანიის 87000-ზე მეტი თანამშრომლის უსაფრთხო გადაყვანა დისტანციურ სამუშაოზე.</p>
                                <p className="op06">სერვისების რაოდენობის გაფართოებამ საშუალება მისცა insite-ის გუნდს შეეთავაზებინა ასოცირებული სერვისების სრული პაკეტები. ასე მაგალითად, ყველაზე პოპულარული „Full Web” სერვისი, სადაც მომხმარებელს მოეთხოვება მხოლოდ საიტის დანიშნულების მოკლე აღწერილობა, დანარჩენს კი უკვე ჩვენი გუნდი თავად აკეთებს. პროექტის დასრულების შემდეგ მომხმარებელს არ სჭირდება ფიქრი უსაფრთხოებაზე, დაცულობაზე ან მიღებული პროდუქტის სხვა ასპექტზე, რადგან ეს ყოველთვის იქნება Insite International-ის გუნდის პასუხისმგებლობა.</p>
                                <p className="op06">კომპანიის ფილოსოფია არის შემდეგი - "ჩვენი შესაძლებლობები შემოიფარგლება მხოლოდ თქვენი ფანტაზიით." თუ თქვენ გაქვთ პროექტი, რომელიც შეუძლებლად გეჩვენებათ, მაშინ ჩვენ დავწერთ იმ ფრთებს, რომლითაც თქვენი იდეა გაფრინდება!</p>
                            </div>
                            <div className="block block2">
                                <Text35 text="დაგვიტოვეთ შეტყობინება"/>
                                <p className="op06">შეკითხვები გაქვთ? გთხოვთ დატოვოთ თქვენი საკონტაქტო ინფორმაცია და ჩვენ დაგიკავშირდებით თქვენთვის მოსახერხებელი მეთოდით. ჩვენი გუნდი ყოველთვის მზადაა დაგეხმაროთ!</p>
                            </div>
                            <Form/>
                        </div>
                    </div>
                </div>
            </Layout>
        </DocumentMeta>
    );
};

export default AboutUs;
