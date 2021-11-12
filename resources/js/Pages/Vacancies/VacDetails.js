import React from "react";

const VacDetails = (props) => {
  return (
    <div className="flex det">
      <div className="icon flex center">
        <img src={`/images/icons/vacancy/${props.imgNum}.svg`} alt="" />
      </div>
      <div>
        <div className="op06">{props.text1}</div>
        <div className="bold">{props.text2}</div>
      </div>
    </div>
  );
};

export default VacDetails;
