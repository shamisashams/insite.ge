import React, {useState} from "react";
import {FaqTitle} from "../FAQ/Questions/Questions";
import "./CostCalc.css";
import {CommonQuestions} from "./CostSteps/CostBox";
import CostSteps from "./CostSteps/CostSteps";
import Layout from "../../Layouts/Layout";
import Meta from "../Meta/Meta";
import DocumentMeta from 'react-document-meta';

const CostCalc = ({features, state, lastPrice}) => {
    const meta = Meta('Some Meta Title', 'keyword', 'description');

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
                                    Platform
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
                                    <p>Chose one or more functionalities for your product</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="common_questions wrapper">
                        <FaqTitle text="Common questions"/>
                        <CommonQuestions
                            question="Plaid quinoa chillwave, brunch retro drinking vinegar butcher irony?"
                            answer="Plaid quinoa chillwave, brunch retro drinking vinegar butcher irony. Fixie cronut sriracha selfies. Fingerstache DIY mumblecore yuccie literally. Thundercats narwhal biodiesel, kogi XOXO sriracha kombucha butcher food truck meditation chartreuse waistcoat etsy schlitz. cronut sriracha selfies. Fingerstache DIY mumblecore yuccie literally."
                        />
                        <CommonQuestions
                            question="Plaid quinoa chillwave, brunch retro drinking vinegar butcher irony?"
                            answer="Plaid quinoa chillwave, brunch retro drinking vinegar butcher irony. Fixie cronut sriracha selfies. Fingerstache DIY mumblecore yuccie literally. Thundercats narwhal biodiesel, kogi XOXO sriracha kombucha butcher food truck meditation chartreuse waistcoat etsy schlitz. cronut sriracha selfies. Fingerstache DIY mumblecore yuccie literally."
                        />
                        <CommonQuestions
                            question="Plaid quinoa chillwave, brunch retro drinking vinegar butcher irony?"
                            answer="Plaid quinoa chillwave, brunch retro drinking vinegar butcher irony. Fixie cronut sriracha selfies. Fingerstache DIY mumblecore yuccie literally. Thundercats narwhal biodiesel, kogi XOXO sriracha kombucha butcher food truck meditation chartreuse waistcoat etsy schlitz. cronut sriracha selfies. Fingerstache DIY mumblecore yuccie literally."
                        />
                    </div>
                </div>
            </Layout>
        </DocumentMeta>
    );
};

export default CostCalc;
