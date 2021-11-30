import React from "react";
import "../../../Components/Button2/Button2.css";

export const CostTitle = ({text}) => {
    return <div className="cost_title">{text}</div>;
};


export const CostOption = (props) => {
    let checkboxItems = props.checkboxItems;
    let isChecked = checkboxItems[props.featureId] && checkboxItems[props.featureId]['answers'].find(obj => obj.id == props.id) ? true : false;
    return (
        <>

            <input checked={isChecked}
                   onChange={props.handler} data-feature={props.featureId} type="checkbox" id={props.id}/>
            <label htmlFor={props.id} className="option">
                {props.option}
            </label>
        </>
    );
};

export const CostQues = ({ques, addCm}) => {
    return (
        <div className="flex cost_question">
            <p className=" op06">{ques}</p>
            <button onClick={addCm} className="add">
                + დაამატეთ კომენტარი
            </button>
        </div>
    );
};

export const CommentField = (props) => {
    return (
        <div className={props.cmFieldClass}>
            <div className="flex">
                <div>
                    <img src="/images/calculator/cm.svg" alt=""/>
                    <span>კომენტარი</span>
                </div>
                <div className="btns">
                    <button data-feature={props.featureId} onClick={props.cancelCM} className="cancel">
                        {props.btnValue1}
                    </button>
                    <button data-feature={props.featureId} onClick={props.confirmCM} className="confirm">
                        {props.btnValue2}
                    </button>
                </div>
            </div>
            <textarea
                className={props.textareaClass}
                ref={props.textareaRef}
                onChange={props.change}
                data-feature={props.featureId}
                readOnly={props.readOnly}
                placeholder="ტექსტი"
            ></textarea>
        </div>
    );
};
export const CostBtn = (props) => {
    return (
        <button
            style={props.style}
            disabled={props.disabled}
            onClick={props.click}
            className={props.large === true ? "main_btn large" : "main_btn"}
        >
            <span id={props.id} className="hover">{props.text}</span>
            <span id={props.id} className="stationary">{props.text}</span>
        </button>
    );
};

// common questions

export const CommonQuestions = (props) => {
    return (
        <div className="co_que">
            <div className="q">{props.question}</div>
            <p className="a op06">{props.answer}</p>
        </div>
    );
};
