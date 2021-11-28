import React from "react";
import { Link } from '@inertiajs/inertia-react'
import "./Button1.css";

const Button1 = () => {
  return (
    <Link href="/solutions">
      <button className="dev_btn">
        <span>დეველოპმენტი</span>
      </button>
    </Link>
  );
};

export default Button1;
