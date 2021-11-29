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
        "создание веб аппликации, React JS, React native, HTML/CSS, NODE.js, .NET Core, LARAVEL, PHP, Native JS, разработчик React JS, разработчик React native, разработчик HTML/CSS, разработчик NODE.js, разработчик .NET Core, разработчик LARAVEL, разработчик PHP, разработчик Native JS",
        "Здесь вы можете ознакомится с технологиями, с которыми работает наша компания. Мы поможем осуществить ваш проект в лучшем варианте его исполнения."
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
                                    para1="Разработка сайта на заказ ведется на основе полного жизненного цикла. Мы используем лучшие методы управления временем и проектами для успешного внедрения универсальных веб-решений для вашего бизнеса."
                                />
                                <div className="flex">
                                    <div className="level_el">
                                        <img
                                            src="/images/develop/Discover.png"
                                            alt=""
                                        />
                                        <p>Понимание запроса</p>
                                        <p className="op06">
                                            Insite International предлагает
                                            сервис планировки для оценки
                                            рыночных тенденций и потребностей
                                            конечных пользователей. Это помогает
                                            более глубоко проанализировать
                                            потребность предлагаемого решения
                                            для конкретной задачи. Затем команда
                                            профессионалов сделает набросок
                                            вашей идей в визуальном стиле.
                                        </p>
                                    </div>
                                    <div className="level_el">
                                        <img
                                            src="/images/develop/Analyse.png"
                                            alt=""
                                        />
                                        <p>Планирование проекта</p>
                                        <p className="op06">
                                            Большая доля успеха проекта
                                            заключается в планировании объема и
                                            управлении действиями, чтобы вовремя
                                            увидеть результаты. Мы эффективно
                                            распределяем ресурсы и выбираем
                                            лучший план, соответствующий бюджету
                                            к запрошенным срокам.
                                        </p>
                                    </div>
                                    <div className="level_el">
                                        <img
                                            src="/images/develop/Design.png"
                                            alt=""
                                        />
                                        <p>Гибкая разработка</p>
                                        <p className="op06">
                                            Гибкое управление проектами - ключ к
                                            успешным проектам. Квалифицированные
                                            менеджеры проектов в Insite
                                            International всегда просматривают и
                                            контролируют прозрачность
                                            коммуникации, непосредственное
                                            выполнение задач, отчитываются и
                                            следят за прогрессом. Регулярное
                                            общение с клиентами позволяет нам
                                            контролировать изменения и
                                            оставаться гибкими.
                                        </p>
                                    </div>
                                    <div className="level_el">
                                        <img
                                            src="/images/develop/Build.png"
                                            alt=""
                                        />
                                        <p>Проверка качества</p>
                                        <p className="op06">
                                            Insite International предоставляет
                                            услуги автоматизированного
                                            тестирования. В зависимости от
                                            требований клиентов и особенностей
                                            проекта инженеры по обеспечению
                                            качества проведут необходимое
                                            тестирование.
                                        </p>
                                    </div>
                                    <div className="level_el">
                                        <img
                                            src="/images/develop/5.png"
                                            alt=""
                                        />
                                        <p>Доставка</p>
                                        <p className="op06">
                                            Insite International разработала
                                            стандарты доставки, которые
                                            обеспечивают успешность каждого
                                            финального продукта и его
                                            развертывания.
                                        </p>
                                    </div>
                                    <div className="level_el">
                                        <img
                                            src="/images/develop/6.png"
                                            alt=""
                                        />
                                        <p>Поддержка</p>
                                        <p className="op06">
                                            С Insite International вы можете
                                            быть уверены в том, что наша команда
                                            послепродажной поддержки работает
                                            вместе с вами для устранения
                                            неполадок и обновления функций.
                                        </p>
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
