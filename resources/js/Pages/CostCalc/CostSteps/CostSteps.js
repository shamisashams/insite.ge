import React, { useState, useRef, useEffect } from "react";
import Title1 from "../../../Components/Title1";
import {
    CostBtn,
    CostOption,
    CostQues,
    CostTitle,
    CommentField,
} from "./CostBox";
import { Link } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

import "./CostSteps.css";

const CostSteps = ({
    step,
    click,
    back,
    features,
    parentCallback,
    state,
    price,
}) => {
    let [checkboxItems, setCheckboxItems] = useState({});
    // const [checkboxState,setCheckboxState] = useRemember({...checkboxItems}, 'CostCalc/CostCalc');
    let [totalPrice, setTotalPrice] = useState(0);
    // let [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const handler = (e, startPrice) => {
        let featureId = e.target.getAttribute("data-feature");
        let answerId = e.target.id;

        if (e.target.checked) {
            if (checkboxItems[featureId]) {
                checkboxItems[featureId]["answers"].push({
                    id: answerId,
                    price: startPrice,
                });
            } else {
                checkboxItems[featureId] = {
                    answers: [{ id: answerId, price: startPrice }],
                    comment: "",
                };
            }
            totalPrice += startPrice;
        } else {
            let index = checkboxItems[featureId]["answers"].findIndex(
                (item) => item.id === answerId
            );
            checkboxItems[featureId]["answers"].splice(index, 1);
            if (
                checkboxItems[featureId]["answers"].length === 0 &&
                !checkboxItems[featureId]["comment"]
            ) {
                delete checkboxItems[featureId];
            }
            totalPrice -= startPrice;
        }
        setCheckboxItems({ ...checkboxItems });
        setTotalPrice(totalPrice);
        parentCallback(totalPrice);
    };

    const [commentSection, setCommentSection] = useState({});
    const textareaRef = useRef([]);
    const stepRef = useRef(null);
    const [currentValue, setCurrentValue] = useState("");

    useEffect(() => {
        let checkboxItems = Inertia.restore("checkboxItems");
        let total = Inertia.restore("totalPrice");
        let data;
        if (checkboxItems && total) {
            data = checkboxItems;
            price = total;
        } else {
            data = state;
        }

        textareaRef.current = features.map((item, index) => {
            let id = item.id;
            textareaRef.current[id].style.height = "35px";
            const scrollHeight = textareaRef.current[id].scrollHeight;
            textareaRef.current[id].style.height = scrollHeight + "px";

            if (data && data[id] && data[id]["comment"]) {
                commentSection[id] = true;
                confirmComment[id] = true;
                textareaRef.current[id].value = data[id]["comment"];
            } else {
                commentSection[id] = false;
                confirmComment[id] = false;
            }
        });
        setCommentSection({ ...commentSection });
        setConfirmComment({ ...confirmComment });

        if (data && price) {
            checkboxItems = data;
            totalPrice = price;
            setTotalPrice(totalPrice);
            parentCallback(totalPrice);
            setCheckboxItems({ ...checkboxItems });
        }
    }, [currentValue]);

    const [confirmComment, setConfirmComment] = useState({});
    const toggleDisabled = (e) => {
        let featureId = e.target.getAttribute("data-feature");
        confirmComment[featureId] = !confirmComment[featureId];
        setConfirmComment({ ...confirmComment });

        if (checkboxItems[featureId]) {
            checkboxItems[featureId]["comment"] =
                textareaRef.current[featureId].value;
        } else {
            checkboxItems[featureId] = {
                answers: [],
                comment: textareaRef.current[featureId].value,
            };
        }
        setCheckboxItems({ ...checkboxItems });
    };

    const cancelComment = (e) => {
        let featureId = e.target.getAttribute("data-feature");

        commentSection[featureId] = false;
        setCommentSection({ ...commentSection });

        textareaRef.current[featureId].value = "";
        confirmComment[featureId] = false;
        setConfirmComment({ ...confirmComment });

        if (checkboxItems[featureId]) {
            checkboxItems[featureId]["comment"] = "";
            if (checkboxItems[featureId]["answers"].length === 0) {
                delete checkboxItems[featureId];
            }
        }

        setCheckboxItems({ ...checkboxItems });
    };

    const addComment = (e) => {
        // let featureId = e.target.getAttribute('data-feature');
        // if (checkboxItems[featureId]) {
        //     checkboxItems[featureId]['comment'] = e.target.value;
        // } else {
        //     checkboxItems[featureId] = {
        //         'answers': [],
        //         'comment': e.target.value
        //     }
        // }
        // setCheckboxItems({...checkboxItems});
        // console.log(checkboxItems);
    };

    const showComment = (id) => {
        commentSection[id] = true;
        setCommentSection({ ...commentSection });
    };

    let style =
        window.innerWidth <= 800
            ? {
                  top: "100px",
                  left: step === 1 ? "-2vw" : "-" + (step * 100 - 98) + "vw",
                  justifyContent: "unset",
              }
            : window.innerWidth > 800
            ? { top: step === 1 ? "-7vh" : "-" + (step * 100 - 100) + "vh" }
            : {};

    if (stepRef) {
        window.onresize = function () {
            if (window.innerWidth > 800) {
                stepRef.current.style.top =
                    step === 1 ? "-7vh" : "-" + (step * 100 - 100) + "vh";
                stepRef.current.style.left = "";
            } else {
                // stepRef.current.style
                // stepRef.current.style.width = (features.length + 1) * 100 + 'vw';
                stepRef.current.style.top = "100px";
                stepRef.current.style.justifyContent = "unset";
                stepRef.current.style.left =
                    step === 1 ? "-2vw" : "-" + (step * 100 - 98) + "vw";
            }
        };
    }

    const saveState = () => {
        Inertia.remember(checkboxItems, "checkboxItems");
        Inertia.remember(totalPrice, "totalPrice");
    };

    return (
        <div ref={stepRef} style={style} className={`cost_steps step_${step}`}>
            <div className="each_step">
                <Title1
                    head="How much could your project cost?"
                    para="Easily calculate the costs of your project with just a few clicks.
            For a precise calculation, only include necessary features"
                />
                <CostTitle text="Platform" />
                <div className="cost_box">
                    <img src="/images/calculator/1.png" alt="" />
                    <h5>Web Services</h5>
                    <CostBtn click={click} text="GET STARTED" large />
                </div>
            </div>
            {features.map((feature, index) => (
                <div className="each_step" key={index}>
                    <CostTitle text={feature.title} />
                    <div className="cost_box">
                        <CostQues
                            addCm={() => showComment(feature.id)}
                            ques={feature.question}
                        />
                        <form>
                            {feature.answer.map((item, index) => (
                                <CostOption
                                    key={index}
                                    featureId={feature.id}
                                    checkboxItems={checkboxItems}
                                    handler={(e) =>
                                        handler(e, item.start_price)
                                    }
                                    id={item.id}
                                    option={item.title}
                                />
                            ))}
                        </form>

                        <CommentField
                            cmFieldClass={
                                commentSection[feature.id]
                                    ? "comment_field"
                                    : "comment_field hidden"
                            }
                            cancelCM={(e) => cancelComment(e)}
                            textareaRef={(e) => {
                                textareaRef.current[feature.id] = e;
                            }}
                            change={(e) => addComment(e)}
                            featureId={feature.id}
                            btnValue1={
                                confirmComment[feature.id] ? "Delete" : "Cancel"
                            }
                            btnValue2={
                                confirmComment[feature.id] ? "Edit" : "Confirm"
                            }
                            textareaClass={
                                confirmComment[feature.id] ? "disabled" : ""
                            }
                            readOnly={confirmComment[feature.id]}
                            confirmCM={(e) => toggleDisabled(e)}
                        />

                        <div className="flex">
                            {index == features.length - 1 ? (
                                <React.Fragment>
                                    <CostBtn text="Back" click={back} />
                                    <Link
                                        href={
                                            "/services/results?data=" +
                                            encodeURI(
                                                JSON.stringify(checkboxItems)
                                            ) +
                                            "&totalPrice=" +
                                            totalPrice
                                        }
                                    >
                                        <CostBtn
                                            click={saveState}
                                            text="FINISH"
                                        />
                                    </Link>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    <CostBtn text="Back" click={back} />
                                    <CostBtn click={click} text="PROCEED" />
                                </React.Fragment>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CostSteps;
