import React from "react";
import "./main.css";

const SlideBtns = ({ direction, moveSlide }) => {
  const nextArrow = "/images/icons/arrows/1.svg";
  const prevArrow = "/images/icons/arrows/2.svg";
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn_slide next" : "btn_slide prev"}
    >
      <img src={direction === "next" ? nextArrow : prevArrow} alt="" />
    </button>
  );
};

export default SlideBtns;
