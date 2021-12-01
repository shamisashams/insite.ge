import React from "react";
import "./CDN.css";
import SeContent from "./SeContent/SeContent";
import Form from "../../Components/Form/Form";
import Layout from "../../Layouts/Layout";
import DocumentMeta from "react-document-meta";
import Meta from "../Meta/Meta";

const CDN = () => {
    const meta = Meta("Insite - CDN", "Cloudflare, route 53, amazon dns, cloudflare dns, cloudflare დაწყობა, route 53 დაწყობა, cloudflare კონფიგურაცია, route 53 კონფიგურაცია", "თუ გჭირდებათ დახმარება CDN სისტემების დაწყობასა და კონფიგურაციაში, ჩვენი პროფესიონალური გუნდი გაგიწევთ ყველა საჭირო დახმარებას და კონსულტაციას.");

    window.onscroll = function () {
        var scroll =
            window.scrollY ||
            window.scrollTop ||
            document.getElementsByTagName("html")[0].scrollTop;
        document.documentElement.style.setProperty(
            "--scroll-var",
            scroll + "px"
        );
    };
    return (
        <DocumentMeta {...meta}>
            <Layout>
                <>
                    <div className="cdn_page">
                        <section
                            id="cloudflare"
                            className="sec left one"
                            style={{
                                background: "url(images/cdn/1.png) no-repeat",
                            }}
                        >
                            <div className="wrapper">
                                <div className="content ">
                                    <SeContent
                                        title="Cloudflare"
                                        para="Cloudflare არის სერვერების ქსელი განთავსებული მთელს მსოფლიოში, რომლებსაც დეველოპერები უკავშირებენ თავიანთ ვებ აპლიკაციებს, რათა დააჩქარონ მათი ჩამოტვირთვა და დაიცვან ისინი DDoS შეტევებისგან. ასევე, ამ სერვისის გამოყენებით, შეგიძლიათ მართოთ DNS ჩანაწერები დომენზე და გადაიტანოთ საიტი HTTPS-ზე (ანუ გექნებათ უფასო SSL სერტიფიკატი). Cloudflare-ს აქვს უფასო მართვის სისტემა და რამდენიმე ფასიანი ტარიფი. ტარიფიდან გამომდინარე, განსხვავდება დაცვის დონე და საიტის დაჩქარების შესაძლებლობები."
                                    />
                                </div>
                            </div>
                        </section>
                        <section
                            id="route53"
                            className="sec right two"
                            style={{
                                background: "url(images/cdn/2.png) no-repeat",
                            }}
                        >
                            <div className="wrapper">
                                <div className="content ">
                                    <SeContent
                                        title="Route 53"
                                        para="Amazon Route 53 გვაძლევს საშუალებას მარტივად ვმართოთ გლობალური ტრაფიკი სხვადასხვა ტიპის მარშრუტიზაციის გამოყენებით (როგორიცაა ლატენტურ მარშრუტზე დაფუძნებული მარშრუტიზაცია, გეოლოკაციაზე დაფუძნებული DNS, გეოგრაფიული განაწილება და ციკლურად შეწონილი ალგორითმი), მათი გაერთიანება გვაძლევს საშუალებას შევქმნათ 24/7-ზე მომუშავე არქიტექტურა, რომელსაც არ ეშინია ფორსმაჯორის. Route 53-ის საშუალებს გვაძლევს, მარტივად ვმართოთ საბოლოო მომხმარებლამდე მიმავალი მარშრუტი და ტრაფიკი, როგორც ერთი AWS რეგიონის ფარგლებში, ასევე ტრაფიკის განაწილებაზე მთელს მსოფლიოში."
                                    />
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="bottom_form wrapper">
                        <Form title="დაგვიტოვეთ შეტყობინება" />
                    </div>
                </>
            </Layout>
        </DocumentMeta>
    );
};

export default CDN;
