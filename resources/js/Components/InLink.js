import React from "react";
import {Link} from '@inertiajs/inertia-react'
import "./main.css";

const InLink = (props) => {
    return (
        <Link href={props.href} className="in_link">
            {props.text} <img src="/images/logo/n.svg" alt=""/>
        </Link>
    );
};

export default InLink;
