import React from "react";
import "./main.css";

const Title1 = ({ head, para }) => {
  return (
    <div className="title1">
      <div className="head">{head}</div>
      <p className="op06">{para}</p>
    </div>
  );
};

export default Title1;
