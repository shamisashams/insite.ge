import React from "react";
import "./Boxes.css";

export const Impacts = (props) => {
  return (
    <div className={`impact_box ${props.impClass}`}>
      <div className="icon flex center">
        <img src={`/images/icons/virtual/${props.icon}.svg`} alt="" />
      </div>
      <div className="rate">{props.rate}</div>
      <div className="op06">{props.para}</div>
    </div>
  );
};

export const PortBox = (props) => {
  return (
    <div className="portbox flex" style={{ backgroundColor: props.bg }}>
      <div className="icon flex center">
        <img src={`/images/icons/virtual/${props.icon}.svg`} alt="" />
      </div>
      <div className="div" style={{ textAlign: "left", maxWidth: "80%" }}>
        <div className="head">{props.head}</div>
        <p className="op06">{props.para}</p>
      </div>
    </div>
  );
};
