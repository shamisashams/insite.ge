import React from "react";
import Text35 from "../../../Components/Text35";
import InLink from "../../../Components/InLink";
import Button2 from "../../../Components/Button2/Button2";
import "./NewsItem.css";
import Moment from "react-moment";

const NewsItem = (props) => {
    return (
        <div className="news_item">
            <div className="img">
                {
                    props.imgSrc ?
                        <img src={props.imgSrc} alt=""/> : ""

                }
            </div>
            <div className="flex first">
                <p className="date">
                    <Moment format="YYYY/MM/DD">
                        {props.date}
                    </Moment>
                </p>
                <p className="location">
                    <img src="/images/icons/news/pin.svg" alt=""/> {props.location}
                </p>
            </div>
            <Text35 text={props.title}/>
            <p className="description">{props.description}</p>
            <div className="bm_flex bm_1 flex">
                <div className="flex">
                </div>
                <InLink text="подробнее" href={props.href}/>
            </div>
            <div className="bm_flex bm_2 flex">
                <div className="flex sm">
                    {/*<a href="https://www.facebook.com/" target="_blank" rel="noreferrer">*/}
                    {/*    <img src="/images/icons/news/fb.svg" alt=""/>*/}
                    {/*</a>*/}
                    {/*<a href="https://www.instagram.com/" target="_blank" rel="noreferrer">*/}
                    {/*    <img src="/images/icons/news/tw.svg" alt=""/>*/}
                    {/*</a>*/}
                    {/*<a href="https://www.youtube.com/" target="_blank" rel="noreferrer">*/}
                    {/*    <img src="/images/icons/news/in.svg" alt=""/>*/}
                    {/*</a>*/}
                </div>
                <Button2 text="Learn more" href={props.hrefBtn}/>
            </div>
        </div>
    );
};

export default NewsItem;
