import React from "react";
import "./Process.css";

const Process = (props) => {
  return (
    <div className={props.mainClass}>
      <div className={props.headClass}>{props.head}</div>
      <p>{props.description}</p>
    </div>
  );
};

export default Process;
