import React from "react";
import "./Showcase1.css";

const Showcase1 = (props) => {
  return (
    <div
      className="showcase1"
      style={{
        background: props.bgSrc,
        backgroundAttachment: "fixed",
        color: props.color,
        backgroundPositionX: "center",
      }}
    >
      <div className="flex center wrapper">
        <div className="content">
          <div className="head" style={{ fontFamily: props.fontFamily }}>
            {props.head}
          </div>
          <p className="op06">{props.para}</p>
        </div>
        <img src={props.imgSrc} alt="" />
      </div>
    </div>
  );
};

export default Showcase1;
