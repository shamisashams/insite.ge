import React from "react";
import Form from "../../Components/Form/Form";
import SeContent from "../CDN/SeContent/SeContent";
import "./Solutions.css";
import "../CDN/CDN.css";
import Layout from "../../Layouts/Layout";
import DocumentMeta from "react-document-meta";
import Meta from "../Meta/Meta";

const Solutions = () => {
    const meta = Meta("Insite - ვებ დეველოპმენტი", "ვებ დეველოპმენტი, საიტის შექმნა, ვებ ტექნოლოგიები, ვებსაიტის დაწერა, React JS, React native, HTML/CSS, NODE.js, .NET Core, LARAVEL, PHP, Native JS", "გაეცანით ტექნოლოგიების მცირე ჩამონათვალს რომელსაც ჩვენი დეველოპერების გუნდი იყენებს. ტექნოლოგიების ფართო არჩევანი გვაძლევს საშუალებას ავარჩიოთ სწორედ ის მეთოდი რომელიც თქვენი აპლიკაციისთვის იდეალური იქნება.");
    window.addEventListener("scroll", (event) => {
        let scroll =
            window.scrollY ||
            window.scrollTop ||
            event.srcElement.body.scrollTop;
        document.documentElement.style.setProperty(
            "--scroll-var",
            scroll + "px"
        );
    });
    return (
        <DocumentMeta {...meta}>
            <Layout>
                <>
                    <div className="solutions_page">
                        <section
                            id="react_js"
                            className="sec left one"
                            style={{
                                background:
                                    "url(images/solutions/1.png) no-repeat",
                            }}
                        >
                            <div className="wrapper">
                                <div className="content">
                                    <SeContent
                                        title="React JS"
                                        para="React გამოიყენება ერთგვერდიანი და მობილური აპლიკაციების შესაქმნელად. მისი მიზანია უზრუნველყოს მაღალი სიჩქარე, სიმარტივე და მასშტაბირებადობა. გრაფიკული ინტერფეისის შესაქმნელად ხშირად გამოიყენება სხვა ბიბლიოთეკებთან ერთად, როგორებიც არის მაგალითად MobX, Redux და GraphQL."
                                    />
                                </div>
                            </div>
                        </section>
                        <section
                            id="react_native"
                            className="sec right two"
                            style={{
                                background:
                                    "url(images/solutions/2.png) no-repeat",
                            }}
                        >
                            <div className="wrapper">
                                <div className="content">
                                    <SeContent
                                        title="React native"
                                        para="React Native არის კროს-პლატფორმული ფრეიმვორკი ღია კოდით შექმნილი Facebook, Inc.-ის მიერ. იგი გამოიყენება JavaScript და TypeScript-ში არსებული მობილურ და დესკტოპ აპლიკაციების შესაქმნელად. React Native მუშაობს ისეთ პლატფორმებთან, როგორიცაა Android, Android TV, iOS, macOS, Apple tvOS, Web, Windows და UWP, რაც დეველოპერებს საშუალებას აძლევს გამოიყენონ React ბიბლიოთეკის შესაძლებლობები ბრაუზერების გარეთ, ნატივური აპლიკაციების შესაქმნელად."
                                    />
                                </div>
                            </div>
                        </section>
                        <section
                            id="html_css"
                            className="sec left three"
                            style={{
                                background:
                                    "url(images/solutions/3.png) no-repeat",
                            }}
                        >
                            <div className="wrapper">
                                <div className="content">
                                    <SeContent
                                        title="HTML/CSS"
                                        para="HTML არის საიტის სტრუქტურა, CSS კი საიტის სტილი, ვიზუალური გაფორმება, ფერები, შრიფტები და სხვა ვიზუალური ელემენტები. ეს არის ძალიან მძლავრ ინსტრუმენტი დეველოპმენტში და აუცილებელ აუცილებელია ყველა Frontend დეველოპერისთვის. ის ასევე საშუალებას აძლევს ვებსაიტებს მოერგოს სხვადასხვა ეკრანის ზომას და მოწყობილობის ტიპებს."
                                    />
                                </div>
                            </div>
                        </section>
                        <section
                            id="node_js"
                            className="sec left four"
                            style={{
                                background:
                                    "url(images/solutions/4.png) no-repeat",
                            }}
                        >
                            <div className="wrapper">
                                <div className="content">
                                    <SeContent
                                        title="NODE.js"
                                        para="Node ან Node.js არის პროგრამული პლატფორმა, რომელიც დაფუძნებულია V8 ძრავზე (რომელიც JavaScript-ს თარგმნის მანქანურ კოდში), რომელიც გარდაქმნის JavaScript-ს მაღალ სპეციალიზებული ენიდან ზოგადი დანიშნულების ენად. Node.js აძლევს საშუალებას JavaScript-ს იურთიერთოს შეყვანა/გამოყვანის მოწყობილობებთან C ++-ში დაწერილი API-ს მეშვეობით, დაუკავშირდეს სხვა გარე ბიბლიოთეკებს, რომლებიც დაწერილია სხვადასხვა ენაზე, უზრუნველყოფს მათთან კავშირს JavaScript კოდიდან. Node.js ძირითადად გამოიყენება როგორც ვებ სერვერი, მაგრამ მის საფუძველზე შესაძლებელია დესკტოპ აპლიკაციების შემუშავებაც და მიკრკონტროლერების პროგრამირება. Node.js-ის საფუძველი არის მოვლენებზე ორიენტირებული და ასინქრონული პროგრამირება არაბლოკირებადი შეყვანა/გამოყვანით."
                                    />
                                </div>
                            </div>
                        </section>
                        <section
                            id="net_core"
                            className="sec right five"
                            style={{
                                background:
                                    "url(images/solutions/5.png) no-repeat",
                            }}
                        >
                            <div className="wrapper">
                                <div className="content">
                                    <SeContent
                                        title=".NET Core"
                                        para="ბოლო წლებში უფასო .NET პლატფორმა სულ უფრო პოპულარული ხდება. მას მრავალი დეველოპერი იყენებს აპლიკაციების შესაქმნელად და შესამოწმებლად, რის საშუალებასაც პლატფორმის ღია კოდი იძლევა. .NET Core გახდა პლატფორმის სხვადასხვა ოპერაციულ სისტემებში ჰორიზონტალური გაფართოების საშუალება. მისი დახმარებით შესაძლებელია აპლიკაციებთან მუშაობა, რომლებიც შემუშავებულია Windows-ისთვის და სხვა ოპერაციული სისტემებისთვის."
                                    />
                                </div>
                            </div>
                        </section>
                        <section
                            id="laravel"
                            className="sec left six"
                            style={{
                                background:
                                    "url(images/solutions/6.png) no-repeat",
                            }}
                        >
                            <div className="wrapper">
                                <div className="content">
                                    <SeContent
                                        title="LARAVEL"
                                        para="Laravel არის უფასო ფრეიმვორკი ღია კოდით, რომელიც შექმნილია MVC (Model View Controller) არქიტექტურული მოდელის გამოყენებით. Laravel გამოშვებულია MIT ლიცენზიით."
                                    />
                                </div>
                            </div>
                        </section>
                        <section
                            id="php"
                            className="sec right seven"
                            style={{
                                background:
                                    "url(images/solutions/7.png) no-repeat",
                            }}
                        >
                            <div className="wrapper">
                                <div className="content">
                                    <SeContent
                                        title="PHP"
                                        para="პირველი, რაც უნდა გავიგოთ ეს არის, რომ არის php მხოლოდ პროგრამირების ენა. მაგრამ ეს პროგრამირების ენა მიმართულია ვებ აპლიკაციებისა და ვებსაიტების შემუშავებაზე. ეს არის ეგრეთ წოდებული სერვერის მხარის პროგრამირების ენა ან backend. ანუ თუ თქვენ იყენებთ php-ის ვებ აპლიკაციების ან სკიპტრების დასაწერად, მისი მეორე მხარე მუშაობს სერვერზე (ჰოსტინგზე თუ გნებავთ), რომელსაც შეუძლია ამ რესურსთან მუშაობა."
                                    />
                                </div>
                            </div>
                        </section>
                        <section
                            id="native_js"
                            className="sec left eight"
                            style={{
                                background:
                                    "url(images/solutions/8.png) no-repeat",
                            }}
                        >
                            <div className="wrapper">
                                <div className="content">
                                    <SeContent
                                        title="Native JS"
                                        para="ეს არის ბიბლიოთეკა, რომელიც საშუალებას გაძლევთ შექმნათ კროს-პლატფორმული აპლიკაციები XML, CSS და JavaScript-ის გამოყენებით. Native script-ი ასრულებს იგივე ფუნქციებს რასაც, უკვე კარგად ცნობილი phonegap (კროს-პლატფორმული აპლიკაციების შექმნა), მაგრამ მათი მიდგომები განსხვავებულია. Phonegap იყენებს ბრაუზერის ძრავს ინტერფეისის გამოსატანად (თქვენ რეალურად იღებთ ვებ გვერდს), Native სკრიპტი კი იყენებს ნატივურ რენდერს და ნატივური UI ელემენტებით."
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

export default Solutions;
