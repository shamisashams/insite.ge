import React from "react";

const TechObj = (props) => {
  return (
    <div className="techobj">
      <img src={`images/icons/techs/${props.imgNum}.png`} alt="" />
      <p>
        {props.title} <br /> {props.title2}
      </p>
    </div>
  );
};

export default TechObj;
