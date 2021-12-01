import React from "react";
import Showcase2 from "../../Components/Showcase2/Showcase2";
import "./WebDevelopment.css";
import { Hr } from "../News/ShowNews/SNCs";
import Form from "../../Components/Form/Form";
import { Link } from "@inertiajs/inertia-react";
import Layout from "../../Layouts/Layout";
import Meta from "../Meta/Meta";
import DocumentMeta from "react-document-meta";

const WebDevelopment = () => {
    const meta = Meta(
        "Insite - ვებ დეველოპმენტი",
        "ვებსაიტების შექმნა, ვებ აპლიკაციების შექმნა, React JS, React native, HTML/CSS, NODE.js, .NET Core, LARAVEL, PHP, Native JS, React JS დეველოპერი, React native დეველოპერი, HTML/CSS დეველოპერი, NODE.js დეველოპერი, .NET Core დეველოპერი, LARAVEL დეველოპერი, PHP დეველოპერი, Native JS დეველოპერი",
        "აქ შეგიძლიათ გაეცნოთ იმ ტექნოლოგიებს, რომლითაც მუშაობს ჩვენი კომპანია. ჩვენ დაგეხმარებით თქვენი პროექტის საუკეთესოდ განხორციელებაში."
    );

    return (
        <DocumentMeta {...meta}>
            <Layout>
                <div className="development_page">
                    <div className="showcase">
                        <div className="wrapper flex center">
                            <Showcase2
                                title="ვებ დეველოპმენტი"
                                para1="ჩვენი ვებ დეველოპმენტის სერვისი იპოვის გადაწყვეტილებას რომელიც შეესაბამება კონკრეტულად თქვენს მოთხოვნებს. არ აქვს მნიშვნელობა რამდენად რთულად გეჩვენებათ პროექტი, ჩვენი ექპერტების გუნი დაგეხმარებათ რეალობაში გადმოიტანოთ თქვენი ჩანაფიქრი."
                            />
                            <img
                                className="text_bg"
                                src="/images/develop/1.png"
                                alt=""
                            />
                        </div>
                        <img
                            className="sc_bg"
                            src="/images/develop/2.png"
                            alt=""
                        />
                    </div>
                    <div
                        className="dev_sols"
                        style={{ background: "url(/images/develop/bg1.png)" }}
                    >
                        <div className="wrapper">
                            <p>ჩვენი გუნდი მუშაობს თითქმის ყველა არსებულ თანამედროვე ტექნოლოგიასთან და პროგრამირების ენასთან, რაც საშუალებას გვაძლევს ვიპოვოთ ყველაზე ოპტიმალური გადაწყვეტილება კონკრეტული კლიენტისთვის. ჩვენი ტექნოლოგიების სია:</p>
                            <div className="grid">
                                <Link href="/solutions#react_js">
                                    <img src="/images/develop/arr.svg" alt="" />
                                    React JS
                                </Link>
                                <Link href="/solutions#net_core">
                                    <img src="/images/develop/arr.svg" alt="" />
                                    .NET Core
                                </Link>
                                <Link href="/solutions#react_native">
                                    <img src="/images/develop/arr.svg" alt="" />
                                    React native
                                </Link>
                                <Link href="/solutions#laravel">
                                    <img src="/images/develop/arr.svg" alt="" />
                                    LARAVEL
                                </Link>
                                <Link href="/solutions#html_css">
                                    <img src="/images/develop/arr.svg" alt="" />
                                    HTML/CSS
                                </Link>
                                <Link href="/solutions#php">
                                    <img src="/images/develop/arr.svg" alt="" />
                                    PHP
                                </Link>
                                <Link href="/solutions#node_js">
                                    <img src="/images/develop/arr.svg" alt="" />
                                    NODE.js
                                </Link>
                                <Link href="/solutions#native_js">
                                    <img src="/images/develop/arr.svg" alt="" />
                                    Native JS
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="second">
                        <div className="wrapper">
                            <Hr hrClass="hr center" />
                            <div className="flex">
                                <img src="/images/develop/3.png" alt="" />
                                <div className="content">
                                    <p>პროგრამული უზრუნველყოფის შემუშავება იწყება იმ კომპანიით, რომელსაც შეგიძლიათ ენდოთ და დარწმუნებული იყოთ, რომ თქვენი იდეა იქნება მიღებული და გაგებული დეველოპერების გუნდის მიერ. Insite International გარანტიას იძლევა უნიკალურობის, ერთგულების, სუფთა კოდის, მაღალი წარმადობის ვებსაიტის, რომელიც გაახარებს თქვენს თვალს.</p>
                                    <p>
                                    Insite International, როგორც ინდივიდუალური და უნიკალური ვებ აპლიკაციების შემმუშავებელი კომპანია, უზრუნველყოფს ბიზნეს იდეის პოტენციალს და უზრუნველყოფს მის კონკურენტუნარიანობას ბაზარზე.{" "}
                                    </p>
                                    <p>ჩვენ ყოველთვის ვზრუნავთ იმაზე რომ ჩვენი პროდუქტები იყოს კონკურენტუნარიანი, მიმზიდველი მომხმარებლებისთვის, იდეალურად დაწერილი და მარტივად აღსაქმელი. ამისათვის ბიზნეს ანალიტიკოსები და პროექტის მენეჯერები, გუნდის ლიდერები, პროგრამული უზრუნველყოფის ინჟინრები და ხარისხის უზრუნველყოფის ინჟინრები აკონტროლებენ პროექტს შესაბამის ეტაპებზე.</p>
                                    <p>მათთვის, ვისაც სურს ჰქონდეს ფანტასტიური ვებსაიტები, Insite International თქვენს სამსახურშია. კომპანიის გამოცდილება და პროექტის სრული მხარდაჭერა აღძრავს ნდობას და ხელს მოუწიდებს პარტნიორებს პოზიტიური თანამშრომლობისკენ. ასე რომ, როდესაც გადაწყვეტთ აუთსორსინგის კომპანიის დაქირავებას სასურველი მიზნის მისაღწევად, თქვენ შეხვდებით საკუთარი საქმის ოსტატებს. ყველა პროცესი ჩვენს ვებ-გვერდზე საკონტაქტო ფორმის შევსებიდან საბოლოო შედეგების წარდგენამდე შესრულებულია უმაღლეს დონეზე. აუცილებლად დაგვიკავშირდით და გამოგვიგზავნეთ პროექტის კონცეფცია, მიუთითეთ თქვენი მოლოდინი საბოლოო შედეგიდან. საუკეთესო ტექნოლოგია და ჩვენი მდიდარი გამოცდილება საშუალებას მისცემს თქვენს იდეას გახდეს მომგებიანი ბიზნესი.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" rest">
                        <div className="wrapper">
                            <div className="levels">
                                <Showcase2
                                    title="შექმნის პროცესი"
                                    para1="ვებსაიტის და ზოგადად ვებ აპლიკაციები შექმნა ხდება მრავალი ციკლის გავლით. ჩვენ ვიყენებთ დროისა და პროექტების მართვის საუკეთესო ტექნიკას უნივერსალური და ინდივიდუალური გადაწყვეტილებების კონკრეტული შემთხვევისთვის მოსარგებად."
                                />
                                <div className="flex">
                                    <div className="level_el">
                                        <img
                                            src="/images/develop/Discover.png"
                                            alt=""
                                        />
                                        <p>მოთხოვნის გაგება</p>
                                        <p className="op06">Insite International გთავაზობთ დაგეგმვის სერვისს ბაზრის ტენდენციებისა და საბოლოო მომხმარებლის საჭიროებების შესაფასებლად. ეს ხელს გიწყობთ უფრო ღრმად გაანალიზდეს შემოთავაზებული გადაწყვეტის საჭიროება კონკრეტული ამოცანისთვის.</p>
                                    </div>
                                    <div className="level_el">
                                        <img
                                            src="/images/develop/Analyse.png"
                                            alt=""
                                        />
                                        <p>პროექტის დაგეგმვა</p>
                                        <p className="op06">პროექტის წარმატების დიდი ნაწილი მდგომარეობს აქტივობების დაგეგმვასა და მართვაში, რათა შედეგი დროულად ნახოთ. ჩვენ ეფექტურად ვანაწილებთ რესურსებს და ვირჩევთ საუკეთესო გეგმას, რომელიც შეესაბამება ბიუჯეტს მოთხოვნილი ვადების შესაბამისად.</p>
                                    </div>
                                    <div className="level_el">
                                        <img
                                            src="/images/develop/Design.png"
                                            alt=""
                                        />
                                        <p>მოქნილობა</p>
                                        <p className="op06">Insite International-ის კვალიფიციური პროექტის მენეჯერები ყოველთვის აკონტროლებენ დავალებების უშუალო შესრულებას და კლიენტებთან რეგულარული კომუნიკაცია საშუალებას გვაძლევს ვაკონტროლოთ ცვლილებები და კლიენტის მოთხოვნების შესაბამისად.</p>
                                    </div>
                                    <div className="level_el">
                                        <img
                                            src="/images/develop/Build.png"
                                            alt=""
                                        />
                                        <p>ხარისხი კონტროლი</p>
                                        <p className="op06">Insite International გთავაზობთ ავტომატური ტესტირების სერვისებს. მომხმარებლის მოთხოვნებიდან და პროექტის სპეციფიკიდან გამომდინარე, ხარისხის უზრუნველყოფის ინჟინრები ჩაატარებენ საჭირო ტესტირებას.</p>
                                    </div>
                                    <div className="level_el">
                                        <img
                                            src="/images/develop/5.png"
                                            alt=""
                                        />
                                        <p>მიწოდება</p>
                                        <p className="op06">ჩვენ INSITE INTERNATIONAL-ში შევიმუშავეთ პროექტის მიწოდების საკუთარი სტანდარტები, რომლებიც უზრუნველყოფენ ყველა დასრულებული პროდუქციის უმაღლეს ხარისხს.</p>
                                    </div>
                                    <div className="level_el">
                                        <img
                                            src="/images/develop/6.png"
                                            alt=""
                                        />
                                        <p>მხარდაჭერა</p>
                                        <p className="op06">Insite International-თან შეგიძლიათ დარწმუნებული იყოთ, რომ ჩვენი მხარდაჭერის ჯგუფი იმუშავებს თქვენთან პროექტის დასრულების შემდეგაც ნებისმიერი პრობლემების არსებული საკითხის გადასაჭრელად.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="projs">
                                {/* <Showcase2 title="популярные проекты" />
            <div className="grid">
              <ProjectBox
                link="https://insite.international/en/"
                imgNum="1"
                title="Aeroline"
              />
              <ProjectBox
                link="https://insite.international/en/"
                imgNum="2"
                title="Ameus"
              />
              <ProjectBox
                link="https://insite.international/en/"
                imgNum="3"
                title="Viptrade EU"
              />
            </div>
            <Button2 text="Узнайте Больше" large /> */}
                                <Form title="დაგვიტოვეთ შეტყობინება" />
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </DocumentMeta>
    );
};

export default WebDevelopment;
