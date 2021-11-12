import React from "react";

const SeContent = ({ title, para }) => {
  return (
    <div className="se_content">
      <h5>{title}</h5>
      <p>{para}</p>
    </div>
  );
};

export default SeContent;
