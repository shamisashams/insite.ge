import React from "react";
import "../FAQ.css";

export const FaqTitle = ({ text }) => {
  return <div className="faq_title">{text}</div>;
};

export const Questions = (props) => {
  return (
    <div className="qna" onClick={props.quesFunction}>
      <div className={props.qClass}>{props.question}</div>
      <div className={props.aClass} style={{ transform: props.scale }}>
        {props.answer}
      </div>
    </div>
  );
};
