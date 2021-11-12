import React, {useState} from "react";
import SliderData from "../../Blogs/BlogSlider/SliderData";
import SlideBtns from "../../../Components/SlideBtns";
import InLink from "../../../Components/InLink";
import "./BlogSlider.css";
import Moment from "react-moment";
import {locale_route} from "../../Helpers/locale_route";
import {usePage} from "@inertiajs/inertia-react";

const BlogSlider = ({blogs}) => {
    const [slideIndex, setSlideIndex] = useState(1);
    const {locale} = usePage().props;

    const nextSlide = () => {
        if (slideIndex !== blogs.length) {
            setSlideIndex(slideIndex + 1);
        } else if (slideIndex === blogs.length) {
            setSlideIndex(1);
        }
    };

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1);
        } else if (slideIndex === 1) {
            setSlideIndex(blogs.length);
        }
    };
    return (
        <div className="blog_slider">
            <div className="wrapper slider">
                {blogs.map((obj, index) => {
                    return (
                        <div
                            key={obj.id}
                            className={
                                slideIndex === index + 1 ? "slide slide-active" : "slide"
                            }
                        >
                            <div className="content">
                                <div className="date">
                                    <Moment format="YYYY/MM/DD">
                                        {obj.created_at}
                                    </Moment>
                                </div>
                                <div className="title">{obj.title}</div>
                                <InLink href={'/blog-details/' + obj.id} text='подробнее'/>
                            </div>
                            {obj.main_file ?
                                <img
                                    className="bg"
                                    src={obj.main_file ? "/" + obj.main_file.path + "/" + obj.main_file.title : ""}
                                    alt=""
                                /> : ""
                            }
                        </div>
                    );
                })}

                <SlideBtns moveSlide={prevSlide} direction={"prev"}/>
                <SlideBtns moveSlide={nextSlide} direction={"next"}/>
            </div>
        </div>
    );
};

export default BlogSlider;
