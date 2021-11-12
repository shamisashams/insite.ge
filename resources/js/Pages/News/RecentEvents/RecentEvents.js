import React from "react";
import Moment from "react-moment";
import {Link} from '@inertiajs/inertia-react'

const RecentEvents = (props) => {
    return (
        <Link href={props.href}>
            <div className="recent_event flex">
                <div className="img">
                    {
                        props.img ?
                            <img src={props.img} alt=""/> : ""
                    }
                    <div className="overlay flex center">
                        <img src="/images/icons/news/arrow.svg" alt=""/>
                    </div>
                </div>
                <div>
                    <p className="date">
                        <img src="/images/icons/news/calendar.svg" alt=""/>
                        <Moment format="YYYY/MM/DD">
                            {props.date}
                        </Moment>
                    </p>
                    <p className="location">
                        {/*<img src="/images/icons/news/pin.svg" alt=""/> {props.location}*/}
                    </p>
                    <div className="title">{props.title}</div>
                    <p>{props.description}</p>
                </div>
            </div>
        </Link>
    );
};

export default RecentEvents;
