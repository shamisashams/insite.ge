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

export const Previous = (props) => {
    const {locale} = usePage().props;
    return (
        <div className="flex prev_next">
            <div className="prev">
                <Link href={props.hrefPrev}>
                    <img src="/images/icons/arrows/1c.svg" alt=""/>
                    Previous
                </Link>
                <div className="pn_item flex">
                    <div className="img">
                        {
                            props.imgPrev ?
                                <img src={"/" + props.imgPrev.path + "/" + props.imgPrev.title} alt=""/>
                                :""
                        }
                    </div>
                    <div>
                        <div className="title">{props.titlePrev}</div>
                        <p>{props.paraPrev}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
