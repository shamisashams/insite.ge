import React from "react";
import "./ShowNews.css";
import {Link} from '@inertiajs/inertia-react'
import {locale_route} from "../../Helpers/locale_route";
import {usePage} from "@inertiajs/inertia-react";

export const Quote = ({quote}) => {

    return (
        <div className="quote">
            {quote}
            <span>"</span>
        </div>
    );
};

export const Hr = ({hrClass}) => {
    return <div className={hrClass}></div>;
};

export const Next = (props) => {
    const {locale} = usePage().props;
    return (
        <div className="flex prev_next">
            <div className="next">
                <Link href={props.hrefNext}>
                    Next
                    <img src="/images/icons/arrows/2c.svg" alt=""/>
                </Link>
                <div className="pn_item flex">
                    <div className="img">
                        {props.imgNext ?
                            <img src={"/" + props.imgNext.path + "/" + props.imgNext.title} alt=""/>
                            : ""
                        }
                    </div>
                    <div>
                        <div className="title">{props.titleNext}</div>
                        <p className="op06">{props.paraNext}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
