import React from "react";
import Text35 from "../../../Components/Text35";
import "./Objects.css";

export const BoxOne = ({ title, para }) => {
  return (
    <div className="box_one">
      <Text35 text={title} />
      <div className="para op06">{para}</div>
    </div>
  );
};

export const BoxTwo = ({ icon, text }) => {
  return (
    <div className="box_two flex center">
      <img src={`/images/icons/remote/${icon}.svg`} alt="" />
      <Text35 text={text} />
    </div>
  );
};

export const CheckedBox = ({ text }) => {
  return (
    <div className="checked_box">
      {text}
      <div className="check flex center">
        <img src="/images/icons/remote/check.svg" alt="" />
      </div>
    </div>
  );
};
