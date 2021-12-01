import React, {useState} from "react";
import Showcase1 from "../../Components/Showcase1/Showcase1";
import {Questions, FaqTitle} from "./Questions/Questions";
import Form from "../../Components/Form/Form";
import Layout from "../../Layouts/Layout";
import Meta from "../Meta/Meta";
import DocumentMeta from 'react-document-meta';

const FAQ = () => {
    const meta = Meta('Insite - ხშირად დასმული კითხვები', 'კომპანიის შესახებ, საიტების შექმნა, საიტის შექმნა, საიტის შეცვლა, საიტის გადატანა', 'აქ შეგიძლიათ ნახოთ ხშირად დასმული შეკითხვები');
    const [revealAnswer, setRevealAnswer] = useState(1);
    const openQuestion = (index) => {
        setRevealAnswer(index);
    };
    return (
        <DocumentMeta {...meta}>
            <Layout>
                <div className="faq_page">
                    <Showcase1
                        bgSrc="url(/images/sc-bgs/faq-bg.png)"
                        color="#272639"
                        head="FAQ"
                        fontFamily="book"
                    />
                    <div className="block block1">
                        <div className="wrapper">
                            <FaqTitle text="ხშირად დასმული კითხვები - სერვისები:"/>
                            <Questions
                                quesFunction={() => openQuestion(1)}
                                question="რა არის დაგეგმარების სერვისი?"
                                answer="დაგეგმარება - ეს სერვისი დაგეხმარებათ დაგეგმოთ გამოთვლითი სიმძლავრე თქვენი კონკრეტული საჭიროებისთვის. სერვისი ასევე მოიცავს სამუშაო გარემოს მომზადებასთან დაკავშირებული ტექნიკური ნიუანსების დაგეგმვას. ჩვენი ექსპერტები დაგეხმარებიან დაგეგმოთ ეფექტური სამუშაო გარემო, ქსელის მარშრუტი, ტრაფიკის მოხმარება და გამოთვლითი სიმძლავრე. უფრო დეტალური ინფორმაციისთვის გთხოვთ დაუკავშირდეთ ჩვენს სპეციალისტებს. ჩვენ განვიხილავთ ყველა მოთხოვნას ინდივიდუალურად."
                                qClass={revealAnswer === 1 ? "question open" : "question"}
                                aClass={revealAnswer === 1 ? "answer op06 open" : "answer op06"}
                            />
                            <Questions
                                quesFunction={() => openQuestion(2)}
                                question="რა არის ვებ დეველოპმენტი?"
                                answer="ვებ დეველოპმენტი - ძირითადად გულისხმობს აპლიკაციებს, რომელთა გამოყენებაც ხდება ვებ ან ინტერნეტ ხელსაწყოების მეშვეობით. მაგალითად, ონლაინ მაღაზია, ბლოგი, ვებ ჟურნალი, კომპანიის ვებსაიტი, CRM და ა.შ. ჩვენ გთავაზობთ ვებ აპლიკაციების შემუშავებისა და განვითარებისთვის სერვისებს. უფრო დეტალური ინფორმაციისთვის გთხოვთ დაუკავშირდეთ ჩვენს სპეციალისტებს. ჩვენ გავითვალისწინებთ თქვენს მოთხოვნებს და შემოგთავაზებთ უნიკალურ გადაწყვეტას."
                                qClass={revealAnswer === 2 ? "question open" : "question"}
                                aClass={revealAnswer === 2 ? "answer op06 open" : "answer op06"}
                            />
                            <Questions
                                quesFunction={() => openQuestion(3)}
                                question="რა არის UI/UX დეველოპმენტი?"
                                answer="UX (ინგ. user experience) სიტყვასიტყვით ნიშნავს 'მომხმარებლის გამოცდილებას'. ზოგადი გაგებით, ეს არის ის, რასაც მომხმარებელი განიცდის საიტთან ან აპლიკაციასთან ურთიერთობისას. UI (ინგ. user interface) ითარგმნება როგორც 'მომხმარებლის ინტერფეისი'. თქვენი მოთხოვნებიდან გამომდინარე, ჩვენ მოვახდენთ იდეების ვიზუალიზაციას UI/UX-ის პრინციპებზე დაყრდნობით. უხეშად რომ ვთქვათ, ეს არის თქვენი პროექტის დიზაინი."
                                qClass={revealAnswer === 3 ? "question open" : "question"}
                                aClass={revealAnswer === 3 ? "answer op06 open" : "answer op06"}
                            />
                            <Questions
                                quesFunction={() => openQuestion(4)}
                                question="რა არის ვირტუალიზაცია?"
                                answer="ვირტუალიზაცია - მარტივი სიტყვებით რომ ვთქვათ, ეს არის რამდენიმე ოპერაციული სისტემის გაშვება ერთი მაქნანის სიმძლავრეზე. ეს მეთოდოლოგია ძალიან მოსახერხებელია საბანკო სისტემების და მსხვილი კომპანიებისთვის, რადგანაც ხდება ძლიან დიდი რესურსების დაზოგვა. ასევე ძალიან ეფექტურია სხვადასხვა აპლიკაციების ტესტირებისთვის, სამუშაო პროცესის მაქსიმალური უსაფრთხოების უზრუნველყოფისთვის და მრავალი სხვა. თუ თქვენ გაქვთ დამატებითი შეკითხვები, გთხოვთ დაგვიკავშირდეთ."
                                qClass={revealAnswer === 4 ? "question open" : "question"}
                                aClass={revealAnswer === 4 ? "answer op06 open" : "answer op06"}
                            />
                            <Questions
                                quesFunction={() => openQuestion(5)}
                                question="რა იგულისხმება დისტანციური მუშაობის სევისში?"
                                answer="ჩვენი სერვისი გულისხმობს კონსულტაციას და ტექნიკური ბაზის უზრუნველყოფას თანამშრომლების დისტანციურ სამუშაოზე გადაყვანისას. ამავდროულად უსაფრთხოებისა და სტაბილური მაქსიმალური დაცვით. ჩვენი დროის გამოწვევებიდან გამომდინარე, კომპანიები სულ უფრო ხშირად მიმართავენ ამ გადაწყვეტას, მაგრამ მათ ყოველთვის არ იციან როგორ განახორციელონ ეს პროცესი ეფექტურად. ჩვენ შემოგთავაზებთ თქვენს საჭიროებებზე მორგებულ გადაწყვეტილებებს."
                                qClass={revealAnswer === 5 ? "question open" : "question"}
                                aClass={revealAnswer === 5 ? "answer op06 open" : "answer op06"}
                            />
                            <Questions
                                quesFunction={() => openQuestion(6)}
                                question="რა არის ქსელური უსაფრთხოების სერვისი?"
                                answer="ქსელის უსაფრთხოება არის პროტოკოლების და პოლისების ერთობლიობა, რომელიც შექმნილია კორპორატიული ქსელური ინფრასტრუქტურისთვის რათა მოხდეს ამ ინფრასტრუქტურის ფუნქციონირების გაანალიზება და დაცვა. მიუხედავად ბიზნესის ტიპისა ზომისა, ყველგან სადაც ქსელური ინფრასტრუქტურა გამოიყენება, საჭიროა სწორი გადაწყვეტილებების მორგება უსაფრთხოების უზრუნველსაყოფად."
                                qClass={revealAnswer === 6 ? "question open" : "question"}
                                aClass={revealAnswer === 6 ? "answer op06 open" : "answer op06"}
                            />
                            <Questions
                                quesFunction={() => openQuestion(8)}
                                question="რა არის CDN"
                                answer="CDN (Content Delivery Network) - ქსელის ინფრასტრუქტურის განაწილება გეოგრაფიული მდებარეობის მიხედვით, საბოლოო მომხმარებლისთვის მონაცემების სწრაფი მიწოდების უზრუნველსაყოფად (ზოგადად ვებ სერვისების). ტრაფიკი ნაწილდება ისე, რომ შეამციროს შეყოვნება და დააჩქაროს მომხმარებლისთვის მონაცემთა გადაცემა."
                                qClass={revealAnswer === 8 ? "question open" : "question"}
                                aClass={revealAnswer === 8 ? "answer op06 open" : "answer op06"}
                            />
                        </div>
                    </div>
                    {/* <div className="block block2">
        <div className="wrapper">
          <FaqTitle text="Regular & Extended Licenses" />
          <Questions
            quesFunction={() => openQuestion(5)}
            question="Plaid quinoa chillwave, brunch retro drinkr butcher irony?"
            answer="Plaid quinoa chillwave, brunch inoa chillwave, brunch inoa chillwave, brunch retro drinking vinegar butcher irony. Fixie cronut sriracha selfies. Fingerstache DIY mumblecore yuccie "
            qClass={revealAnswer === 5 ? "question open" : "question"}
            aClass={revealAnswer === 5 ? "answer op06 open" : "answer op06"}
          />
          <Questions
            quesFunction={() => openQuestion(6)}
            question="Plaid quinoa chillwave, brunch retro drinkingn ch retro drinking vinegar butcher irony?"
            answer="unch inoa chillwave, brunch inoa chillwave, brunch retro drinking vinegar buto drinking vinegar buto drinking vinegar butcher irony. Fixie cronut sriracha selfies. Fingerstache DIY mumblecore yuccie "
            qClass={revealAnswer === 6 ? "question open" : "question"}
            aClass={revealAnswer === 6 ? "answer op06 open" : "answer op06"}
          />
          <Questions
            quesFunction={() => openQuestion(7)}
            question="Plaid quinoa chillwave, brun vinegar butcher irony?"
            answer="e, brunch inoa chillwave, brunch inoa chillwave, brunch retro drinking vinegar butcher irony. Fixie cronut sriracha selfies. Fingerstache DIY mumblecore yuccie "
            qClass={revealAnswer === 7 ? "question open" : "question"}
            aClass={revealAnswer === 7 ? "answer op06 open" : "answer op06"}
          />
          <Questions
            quesFunction={() => openQuestion(8)}
            question="Plaid quinoa chillwave, brunch retro drinking vinegar butcher irony?"
            answer="Plaid quinoa chillwave, brunch inoa chillwave, brunch inoa chillwave, brunch retro drinking vinegillwave, brunch retro drinking vinegillwave, brunch retro drinking vinegillwave, brunch retro drinking vinegar butcher irony. Fixie cronut sriracha selfies. Fingerstache DIY mumblecore yuccie "
            qClass={revealAnswer === 8 ? "question open" : "question"}
            aClass={revealAnswer === 8 ? "answer op06 open" : "answer op06"}
          />
        </div>
      </div> */}
                    {/* <div
        className="block block3"
        style={{ background: "url(images/home/services/bg.png)" }}
      >
        <div className="wrapper">
          <FaqTitle text="Regular & Extended Licenses" />
          <Questions
            quesFunction={() => openQuestion(9)}
            question="Plaid quinoa chillwave, brunch retro drinkr butcher irony?"
            answer="Plaid quinoa chillwave, brunch inoa chillwave, brunch inoa chillwave, brunch retro drinking vinegar butcher irony. Fixie cronut sriracha selfies. Fingerstache DIY mumblecore yuccie "
            qClass={revealAnswer === 9 ? "question open" : "question"}
            aClass={revealAnswer === 9 ? "answer op06 open" : "answer op06"}
          />
          <Questions
            quesFunction={() => openQuestion(10)}
            question="Plaid quinoa chillwave, brunch retro drinkingn ch retro drinking vinegar butcher irony?"
            answer="unch inoa chillwave, brunch inoa chillwave, brunch retro drinking vinegar buto drinking vinegar buto drinking vinegar butcher irony. Fixie cronut sriracha selfies. Fingerstache DIY mumblecore yuccie "
            qClass={revealAnswer === 10 ? "question open" : "question"}
            aClass={revealAnswer === 10 ? "answer op06 open" : "answer op06"}
          />
          <Questions
            quesFunction={() => openQuestion(11)}
            question="Plaid quinoa chillwave, brun vinegar butcher irony?"
            answer="e, brunch inoa chillwave, brunch inoa chillwave, brunch retro drinking vinegar butcher irony. Fixie cronut sriracha selfies. Fingerstache DIY mumblecore yuccie "
            qClass={revealAnswer === 11 ? "question open" : "question"}
            aClass={revealAnswer === 11 ? "answer op06 open" : "answer op06"}
          />
          <Questions
            quesFunction={() => openQuestion(12)}
            question="Plaid quinoa chillwave, brunch retro drinking vinegar butcher irony?"
            answer="Plaid quinoa chillwave, brunch inoa chillwave, brunch inoa chillwave, brunch retro drinking vinegillwave, brunch retro drinking vinegillwave, brunch retro drinking vinegillwave, brunch retro drinking vinegar butcher irony. Fixie cronut sriracha selfies. Fingerstache DIY mumblecore yuccie "
            qClass={revealAnswer === 12 ? "question open" : "question"}
            aClass={revealAnswer === 12 ? "answer op06 open" : "answer op06"}
          />
        </div>
      </div> */}
                    <div className="wrapper">
                        <Form title="დაგვიტოვეთ შეტყობინება"/>
                    </div>
                </div>
            </Layout>
        </DocumentMeta>
    );
};

export default FAQ;
