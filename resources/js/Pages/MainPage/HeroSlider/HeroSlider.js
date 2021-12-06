import React, { useState, useEffect } from "react";
import SlideBtns from "../../../Components/SlideBtns";
import sliderData from "./SliderData";
import Button2 from "../../../Components/Button2/Button2";
import "./HeroSlider.css";
import SocialMedia from "../../../Components/SocialMedia";
// import { use } from "browser-sync";

export const HeroSlider = () => {
    const [slideIndex, setSlideIndex] = useState(1);

    useEffect(() => {
        const lastIndex = sliderData.length;
        if (slideIndex < 1) {
            setSlideIndex(lastIndex);
        }
        if (slideIndex > lastIndex) {
            setSlideIndex(1);
        }
    }, [slideIndex, sliderData]);

    useEffect(() => {
        let autoSlide = setInterval(() => {
            setSlideIndex(slideIndex + 1);
        }, 5000);
        return () => {
            clearInterval(autoSlide);
        };
    }, [slideIndex]);

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
                            slideIndex === index + 1
                                ? "slide slide-active"
                                : "slide"
                        }
                    >
                        <div className="content">
                            <span className="square"></span>
                            <h1>{obj.title}</h1>
                            <Button2
                                href={obj.btnLink}
                                text={obj.btn}
                                large={true}
                            />
                        </div>
                        <img
                            src={`images/hero/${index + 1}.png`}
                            alt=""
                            className="hero_img"
                        />
                    </div>
                );
            })}

            <SlideBtns
                moveSlide={() => setSlideIndex(slideIndex - 1)}
                direction={"prev"}
            />
            <SlideBtns
                moveSlide={() => setSlideIndex(slideIndex + 1)}
                direction={"next"}
            />

            <div className="dot_container">
                {Array.from({ length: 3 }).map((item, index) => {
                    return (
                        <div
                            key={index}
                            onClick={() => moveDot(index + 1)}
                            className={
                                slideIndex === index + 1 ? "dot active" : "dot"
                            }
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
