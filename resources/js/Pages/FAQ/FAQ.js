import React, {useState} from "react";
import Showcase1 from "../../Components/Showcase1/Showcase1";
import {Questions, FaqTitle} from "./Questions/Questions";
import Form from "../../Components/Form/Form";
import Layout from "../../Layouts/Layout";

const FAQ = () => {
    const [revealAnswer, setRevealAnswer] = useState(1);
    const openQuestion = (index) => {
        setRevealAnswer(index);
    };
    return (
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
                        <FaqTitle text="Часто Задаваемые Вопросы - Сервисы:"/>
                        <Questions
                            quesFunction={() => openQuestion(1)}
                            question="Что подразумевает планировка?"
                            answer="Планировка – данный сервис помогает вам распланировать вычислительную мощность под ваши конкретные нужды. Также планировка включает составления рабочей среды с техническими нюансами. Наши специалисты помогут вам составить план эффективной рабочей среды, сетевого маршрута, потребления трафика и вычислительных мощностей. Для более детальной информации пожалуйста обратитесь к нашим специалистам. Все заявки мы рассматриваем индивидуально.  "
                            qClass={revealAnswer === 1 ? "question open" : "question"}
                            aClass={revealAnswer === 1 ? "answer op06 open" : "answer op06"}
                        />
                        <Questions
                            quesFunction={() => openQuestion(2)}
                            question="Что подразумевают веб разработки?"
                            answer="Веб разработки – включают в себя в основном аппликации, которые запускаются, используя интернет архитектуру. К примеру, онлайн магазин, блог, веб журнал, сайт компании, CRM и так далее. Мы предоставляем услуги по разработке и развитию аппликации для использования как раз в среде интернет. Ваши запросы могу быть разные, но цель наших проектов в плане веб разработок являются их доступность через веб проткал. Для более детальной информации пожалуйста обратитесь к нашим специалистам. Мы рассмотрим ваши требования и предложим вам уникальное решение."
                            qClass={revealAnswer === 2 ? "question open" : "question"}
                            aClass={revealAnswer === 2 ? "answer op06 open" : "answer op06"}
                        />
                        <Questions
                            quesFunction={() => openQuestion(3)}
                            question="Что подразумевает UI/UX?"
                            answer="UX (англ. user experience) дословно означает «опыт пользователя». В общем смысле это то что пользователь ощущает при взаимодействии с сайтом или приложением. UI (англ. user interface) переводится как «пользовательский интерфейс». Основываясь на ваши требования, мы предоставляем вам визуализацию вашей идей основываясь на принципах UI/UX. Грубо говоря это дизайн вашего проекта."
                            qClass={revealAnswer === 3 ? "question open" : "question"}
                            aClass={revealAnswer === 3 ? "answer op06 open" : "answer op06"}
                        />
                        <Questions
                            quesFunction={() => openQuestion(4)}
                            question="Что подразумевает Виртуализация?"
                            answer="Виртуализация – на простом языке это запуск нескольких операционных систем на мощностях одной машины. Данное решение является очень удобной для больших компаний банковских систем для экономии ресурсов, тестирования и много ещё. Если у вас дополнительные вопросы, пожалуйста свяжитесь с нами."
                            qClass={revealAnswer === 4 ? "question open" : "question"}
                            aClass={revealAnswer === 4 ? "answer op06 open" : "answer op06"}
                        />
                        <Questions
                            quesFunction={() => openQuestion(5)}
                            question="Что подразумевает Удалённая Работа?"
                            answer="В рамках нашего сервиса данная услуга подразумевает консультацию и предоставления сервисов при переводе сотрудников на удалённую работу в целях обеспечения безопасности и стабильной работы. Из-за вызовов современности компании всё чаще прибегают к данному решению, но не всегда знают, как эффективно его реализовать. Мы предложим решения заточенное конкретно под ваши нужды."
                            qClass={revealAnswer === 5 ? "question open" : "question"}
                            aClass={revealAnswer === 5 ? "answer op06 open" : "answer op06"}
                        />
                        <Questions
                            quesFunction={() => openQuestion(6)}
                            question="Что подразумевает Сетевая Безопасность?"
                            answer="Сетевая безопасность — набор требований и политик, которые предъявляются к сетевой корпоративной инфраструктуре для анализа ее работы и недопущения доступа к данным злоумышленникам, изменения этих данных, их модификации, а также отказа работы сети или ее отдельных ресурсов. Независимо от масштаба и вида бизнеса везде, где используется сетевая инфраструктура, необходимы аппаратные решения и программные продукты, которые позволяют обеспечить безопасность сети."
                            qClass={revealAnswer === 6 ? "question open" : "question"}
                            aClass={revealAnswer === 6 ? "answer op06 open" : "answer op06"}
                        />
                        <Questions
                            quesFunction={() => openQuestion(8)}
                            question="Что подразумевает CDN"
                            answer="CDN (Content Delivery Network) — распределение сетевой инфраструктуры по географическому расположению, в целях обеспечения быстрой доставки даты к конечному пользователю (веб сервисов в целом). Трафик распределён так, чтобы уменьшить время ожидания и ускорить передачу данных пользователю."
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
                    <Form title="Оставьте нам записку"/>
                </div>
            </div>
        </Layout>
    );
};

export default FAQ;
