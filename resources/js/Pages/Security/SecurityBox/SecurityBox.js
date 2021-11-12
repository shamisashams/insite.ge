import React from "react";
import "../Security.css";

const SecurityBox = ({ icon, para }) => {
  return (
    <div className="security_box">
      <img src={`/images/icons/security/${icon}.svg`} alt="" />
      <div className="para">{para}</div>
    </div>
  );
};

export default SecurityBox;
