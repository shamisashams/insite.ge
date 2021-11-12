import React from "react";
import Button2 from "../Button2/Button2";
import "./Showcase2.css";

const Showcase2 = (props) => {
  return (
    <div className="showcase2">
      <div className="title">{props.title}</div>
      <div className="sub">{props.subtitle}</div>
      <p>{props.para1}</p>
      <p>{props.para2}</p>
      <p>{props.para3}</p>
      <Button2 text="Бесплатная консультация" large />
    </div>
  );
};

export default Showcase2;
