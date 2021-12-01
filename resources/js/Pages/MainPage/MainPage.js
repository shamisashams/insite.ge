import React from "react";
import Title1 from "../../Components/Title1";
import InLink from "../../Components/InLink";
import {HeroSlider} from "./HeroSlider/HeroSlider";
import ServiceObject from "./Services/ServiceObject";
import Technology from "./Technology/Technology";
import "./MainPage.css";
import WorkWithUs from "./WorkWithUs/WorkWithUs";
import Blog from "./Blog/Blog";
import Text35 from "../../Components/Text35";
import Form from "../../Components/Form/Form";
import Layout from "../../Layouts/Layout";
import DocumentMeta from 'react-document-meta';
import Meta from "../Meta/Meta";

const MainPage = ({blogs}) => {
    const meta = Meta('Insite - მთავარი გვერდი', 'ვებ დეველოპმენტი, საიტის შექმნა, ვებ ტექნოლოგიები, ვებსაიტის დაწერა, React JS, React native, HTML/CSS, NODE.js, .NET Core, LARAVEL, PHP, Native JS, Laravel დეველოპერი, Laravel დეველოპერი ვაკანსია, react.js, react.js ვაკანსია, node.js, node.js ვაკანსია, php, php ვაკანსია, Cloudflare, route 53, amazon dns, cloudflare dns, cloudflare დაწყობა, route 53 დაწყობა, cloudflare კონფიგურაცია, route 53 კონფიგურაცია, საიტის ფასი, საიტის შექმნა, საიტის შექმნის ფასი, ვებ აპლიკაციის ფასი, საიტის კალკულატორი, თანამშრომლების გადაყვანა დისტანციურ მუშაობაზე, დისტანციური მუშაობა, გადასვლა რემოუთად, რემოუთად მუშაობა', 'კომპანია Insite International გთავაზობთ ვებ საიტების და ვებ აპლიკაციების შემქნის სერვისებს. გაეცანით ჩვენი კომპანიის სერვისებს და მიიღეთ ყველაზე მაღალკვალიფიციური სერვისის საქართველოში.');
    return (
        <DocumentMeta {...meta}>
            <Layout>
                <div className="main_page">
                    <div
                        className="hero_section"
                        style={{
                            background: "url(images/hero/bg.png)",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                                                }}
                    >
                        <HeroSlider/>
                    </div>
                    <div
                        className="services_section"
                        style={{background: "url(images/home/services/bg.png)"}}
                    >
                        <div className="wrapper">
                            {/* <InLink text="подробнее"/> */}
                            <Title1
                                head="სერვისები"
                                para="გაეცანით ჩვენი მომსახურების ფართო სპექტრი. ჩვენ გთავაზობთ მომსახურების სრულ სპექტრს თითოეული სერვისის ფარგლებში."
                            />
                            <div className="service_boxes">
                                <ServiceObject
                                    href="/services/planning"
                                    imgNum="1"
                                    title="დაგეგმარება"
                                    para="სამუშაო პროცესის, ქსელის არქიტექტურა და უსაფრთხოების სისტემების დაგეგმვა."
                                />
                                <ServiceObject
                                    href="/services/web-development"
                                    imgNum="2"
                                    title="ვებ დეველოპმენტი"
                                    para="ნებისმიერი სირთულის ვებ აპლიკაციების შექმნა, მოდიფიკაცია და მხარდაჭერა."
                                />
                                <ServiceObject
                                    href="/services/design"
                                    imgNum="3"
                                    title="UI/UX დეველოპმენტი"
                                    para="ჩვენი შესაძლებლობების ზღვარი მხოლოდ თქვენი ფანტაზიაა. ჩვენ გადმოვიტანთ რეალობაში თქვენს ნებისმიერ ფანტაზიას."
                                />
                                <ServiceObject
                                    href="/services/virtualization"
                                    imgNum="4"
                                    title="ვირტუალიზაცია"
                                    para="მოახდინეთ თქვენი სამუშაო სივრცის ვირტუალიზაცია ეფექტურობის, უსაფრთხოებისა და რესურსების ოპტიმიზაციისთვის."
                                />
                                <ServiceObject
                                    href="/services/remote-work"
                                    imgNum="5"
                                    title="დისტანციური მუშაობა"
                                    para="ჩვენ დაგეხმარებით თქვენი თანამშრომლების დისტანციურ სამუშაოზე გადაყვანაში."
                                />
                                <ServiceObject
                                    href="/services/security"
                                    imgNum="6"
                                    title="ქსელური უსაფრთხოება"
                                    para="დაიცავით თქვენი სამუშაო გარემო მიზანმიმართული და შემთხვევითი თავდასხმებისგან. დაიცავით თქვენი კომპანიის ყველაზე სუსტი ნაწილი."
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        className="technology_section"
                        style={{
                            background: "url(images/home/technology/bg.png)",
                            backgroundAttachment: "fixed",
                        }}
                    >
                        <div className="wrapper">
                            {/* <InLink text="подробнее"/> */}
                            <Title1 head="ტექნოლოგიები"/>
                        </div>
                        <Technology/>
                    </div>
                    <div className="work_with_us">
                        <div className="wrapper">
                            {/* <InLink text="подробнее"/> */}
                            <Title1 head="იმუშავე ჩვენთან"/>
                        </div>
                        <WorkWithUs/>
                    </div>
                    <div className="blogs_section">
                        <div className="wrapper">
                            <InLink href="/blog" text="მეტი"/>
                            <Title1
                                head="ბლოგი"
                                para="აქ შეგიძლიათ წაიკითხოთ ჩვენი ტექნიკური ექსპერტები მოსაზრებები და მიიღოთ რჩევები სხვადასხვა ტექნიკურ საკითხებზე. იყავით ჩვენთან და არ გამოტოვოთ ის, რაც შეიძლება ერთ დღეს დაგეხმაროთ პრობლემის გადაჭრაში :)"
                            />
                            <div className="flex blog_flex">
                                {
                                    blogs.map((item, index) =>
                                        <React.Fragment key={index}>
                                            <Blog
                                                img={item.main_file ? "/" + item.main_file.path + "/" + item.main_file.title : ""}
                                                date={item.created_at}
                                                title={item.title}
                                                para={item.description}
                                                id={item.id}
                                            />
                                            <hr/>
                                        </React.Fragment>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div className="flex bottom main_page wrapper">
                        <div>
                            <Text35 text="დაგვიტოვეთ შეტყობინება"/>
                            <p className="op06">
                                შეკითხვები გაქვთ? გთხოვთ დატოვოთ თქვენი საკონტაქტო ინფორმაცია და ჩვენ დაგიკავშირდებით თქვენთვის მოსახერხებელი მეთოდით. ჩვენი გუნდი ყოველთვის მზადაა დაგეხმაროთ!
                            </p>
                        </div>
                        <Form title=""/>
                    </div>
                </div>
            </Layout>
        </DocumentMeta>
    );
};

export default MainPage;
