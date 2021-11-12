import React from "react";
import "./Technology.css";
import TechObj from "./TechObj";

const Technology = () => {
  return (
    <div className="techno_section">
      <div
        className="circle"
        style={{
          background: "url(/images/home/technology/1.png)",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <div className="relative_object">
          <div className="top">
            <div className="category">CDN</div>
            <div className="fadein">
              <img
                className="arrow"
                src="images/icons/techs/arrow.png"
                alt=""
              />
              <div className="category_content">
                <TechObj title="Cloudflare" imgNum={3} />
                <TechObj title="Route 53" imgNum={4} />
              </div>
            </div>
            <div className="space"></div>
          </div>
          <div className="right">
            <div className="category">Back end</div>
            <div className="fadein">
              <img
                className="arrow"
                src="images/icons/techs/arrow.png"
                alt=""
              />
              <div className="category_content">
                <TechObj title="NODE.js" imgNum={5} />
                <TechObj title="Native JS" imgNum={1} />
                <TechObj title="PHP" imgNum={6} />
                <TechObj title=".NET CORE" imgNum={7} />
                <TechObj title="LARAVEL" imgNum={8} />
              </div>
            </div>
            <div className="space"></div>
          </div>
          <div className="bottom">
            <div className="category">Virtualization</div>
            <div className="fadein">
              <img
                className="arrow"
                src="images/icons/techs/arrow.png"
                alt=""
              />
              <div className="category_content">
                <TechObj title="Vmware" imgNum={9} />
                <TechObj title="Proxmox" imgNum={10} />
              </div>
            </div>
            <div className="space"></div>
          </div>
          <div className="left">
            <div className="category">Front end</div>
            <div className="fadein">
              <img
                className="arrow"
                src="images/icons/techs/arrow.png"
                alt=""
              />
              <div className="category_content">
                <TechObj title="ReactJS" title2="React Native" imgNum={1} />
                <TechObj title="HTML/CSS" imgNum={2} />
              </div>
            </div>
            <div className="space"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technology;
