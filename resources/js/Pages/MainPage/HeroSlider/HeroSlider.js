import React, { useState } from "react";
import SlideBtns from "../../../Components/SlideBtns";
import sliderData from "./SliderData";
import Button2 from "../../../Components/Button2/Button2";
import "./HeroSlider.css";
import SocialMedia from "../../../Components/SocialMedia";

export const HeroSlider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== sliderData.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === sliderData.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(sliderData.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div className="hero_slider wrapper">
      {sliderData.map((obj, index) => {
        return (
          <div
            key={obj.id}
            className={
              slideIndex === index + 1 ? "slide slide-active" : "slide"
            }
          >
            <div className="content">
              <span className="square"></span>
              <h1>{obj.title}</h1>
              <Button2 text={obj.btn} large={true} />
            </div>
            <img
              src={`images/hero/${index + 1}.png`}
              alt=""
              className="hero_img"
            />
          </div>
        );
      })}

      <SlideBtns moveSlide={prevSlide} direction={"prev"} />
      <SlideBtns moveSlide={nextSlide} direction={"next"} />

      <div className="dot_container">
        {Array.from({ length: 3 }).map((item, index) => {
          return (
            <div
                key={index}
              onClick={() => moveDot(index + 1)}
              className={slideIndex === index + 1 ? "dot active" : "dot"}
            ></div>
          );
        })}
      </div>

      <div className="slider_counter">
        <span className="current">{slideIndex}</span>/
        <span className="total">{sliderData.length}</span>
      </div>

      <SocialMedia />
    </div>
  );
};
