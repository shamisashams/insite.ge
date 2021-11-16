import React from "react";
import { Link } from "@inertiajs/inertia-react";

const TechObj = (props) => {
    return (
        <Link href={props.link}>
            <div className="techobj">
                <img src={`images/icons/techs/${props.imgNum}.png`} alt="" />
                <p>
                    {props.title} <br /> {props.title2}
                </p>
            </div>
        </Link>
    );
};

export default TechObj;
