import React, {useState} from "react";
import {FaqTitle} from "../FAQ/Questions/Questions";
import "./CostCalc.css";
import {CommonQuestions} from "./CostSteps/CostBox";
import CostSteps from "./CostSteps/CostSteps";
import Layout from "../../Layouts/Layout";
import Meta from "../Meta/Meta";
import DocumentMeta from 'react-document-meta';

const CostCalc = ({features, state, lastPrice}) => {
    const meta = Meta('Insite - კალკულატორი', 'საიტის ფასი, საიტის შექმნა, საიტის შექმნის ფასი, ვებ აპლიკაციის ფასი, საიტის კალკულატორი', 'გინდათ სწრაფად გაიგოთ რა დაგიჯდებათ საიტი ან ვებ აპლიკაცია? გამოიყენეთ ჩვენი მარტივი ონლაინ კალკულატორი და მიიღეთ აპლიკაციის შექმნის ღირებულების და დროის მოსალოდნელი ჩარჩო.');

    const [costStep, setCostStep] = useState(1);
    const nextStep = () => {
        setCostStep(costStep + 1);
    };
    let [totalPrice, setTotalPrice] = useState(0);

    const prevStep = () => {
        setCostStep(costStep - 1);
    };

    const [comment, setComment] = useState(false);
    const showComment = () => {
        setComment(!comment);
    };

    const handleCallback = (childData) => {
        setTotalPrice(childData);
    }

    return (
        <DocumentMeta {...meta}>
            <Layout>
                <div className="calculate_page">
                    <div
                        className="calculator"
                        style={{background: "url(/images/calculator/bg.png)"}}
                    >
                        <div className="wrapper content flex ">
                            <div className="list">

                                <button
                                    onClick={() => setCostStep(1)}
                                    className={costStep === 1 ? "active" : ""}
                                >
                                    პლატფორმა
                                </button>
                                {
                                    features.map((feature, index) => (

                                        <button key={index}
                                                onClick={() => setCostStep(index + 2)}
                                                className={costStep === index + 2 ? "active" : ""}
                                        >
                                            {feature.title}
                                        </button>
                                    ))

                                }
                            </div>
                            <CostSteps
                                step={costStep}
                                state={state}
                                price={lastPrice}
                                features={features}
                                click={() => nextStep()}
                                back={() => prevStep()}
                                parentCallback={handleCallback}
                            />
                            <div className="result">
                                <strong>
                                    $ <span id="cost_amount">{totalPrice}</span>
                                </strong>
                                <div style={{opacity: costStep === 1 ? 0 : 1, transition: ".7s"}}>
                                    <p>აირჩიეთ ერთი ან მეტი ფუნქცია თქვენი პროდუქტისთვის</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="common_questions wrapper">
                        <FaqTitle text="ხშირად დასმული შეკითხვები"/>
                        <CommonQuestions
                            question="როგორ გამოვთვალოთ აპლიკაციის შექმნის ღირებულება?"
                            answer="ვებ აპლიკაციის კალკულატორები ზოგავს კლიენტებს დროს და არის თქვენი ონლაინ ფინანსური მრჩეველი. მსგავსი კალკულატორი მარტივი გზა აპლიკაციის დაახლოებით ღირებულების და საანგარიშებლად, ელ-ფოსტის გაგზავნის, პასუხების მოლოდინის ან გუგლში ძიების მცდელობის გარეშე. ღირებულების კალკულატორი არის შესანიშნავი შესაძლებლობა ნებისმიერ დროს სწრაფად და დამოუკიდებლად შეაფასოთ თქვენი ჩაფიქრებული პროექტის მოსალოდნელი ღირებულების ჩარჩო და შექმნის მოსალოდნელი ხანგრძლივობა."
                        />
                        <CommonQuestions
                            question="როგორ მუშაობს ეს კალკულატორი?"
                            answer="ღირებულების კალკულატორი არის ინსტრუმენტი ვებ აპლიკაციის მოსალოდნელი ღირებულების და დროის სწრაფ გამოსათვლელად."
                        />
                        <CommonQuestions
                            question="რა ვქნა, თუ მე მაქვს სპეციალური მოთხოვნები, მაგრამ ისინი არ არის ჩამონათვალში?"
                            answer="ასეთი შემთხვევებისთვის გვაქვს კომენტარების განყოფილება, როცა კონკრეტულ კითხვაზე პასუხობთ, დააჭირეთ ღილაკს 'კომენტარი', შეავსეთ გახსნილი ველი, და თქვენი კომენტარი დაემატება კონკრეტულ განყოფილებას. გთხოვთ გაითვალისწინოთ, რომ კომენტარის არ ითვლება საბოლოო თანხაში. ყველა დანამატი გამოითვლება ცალკე."
                        />
                    </div>
                </div>
            </Layout>
        </DocumentMeta>
    );
};

export default CostCalc;
