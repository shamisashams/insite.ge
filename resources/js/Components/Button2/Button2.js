import React from "react";
import { Link } from '@inertiajs/inertia-react'
import "./Button2.css";

const Button2 = (props) => {
  return (
    <Link href={props.href}>
      <button className={props.large === true ? "main_btn large" : "main_btn"}>
        <span className="hover">{props.text}</span>
        <span className="stationary">{props.text}</span>
      </button>
    </Link>
  );
};

export default Button2;
