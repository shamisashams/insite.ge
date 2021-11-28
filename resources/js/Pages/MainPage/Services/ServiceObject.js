import React from "react";
import Button2 from "../../../Components/Button2/Button2";
import "./ServiceObject.css";

const ServiceObject = (props) => {
    return (
        <div className="service_object">
            <img src={`images/icons/services/${props.imgNum}.svg`} alt=""/>
            <div className="title">{props.title}</div>
            <div className="para">{props.para}</div>
            <Button2 href={props.href} text="მეტი" large/>
        </div>
    );
};

export default ServiceObject;
