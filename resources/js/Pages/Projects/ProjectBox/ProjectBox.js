import React from "react";

const ProjectBox = ({ imgNum, title, link }) => {
  return (
    <div className="project_box">
      <a href={link} target="_blank" rel="noreferrer">
        <div className="box img">
          <img src={`/images/projects/${imgNum}.png`} alt="" />
          <div className="frame">
            <div className="side hor top"></div>
            <div className="side ver right"></div>
            <div className="side hor bottom"></div>
            <div className="side ver lrft"></div>
          </div>
        </div>
      </a>
      <h1>{title}</h1>
    </div>
  );
};

export default ProjectBox;
