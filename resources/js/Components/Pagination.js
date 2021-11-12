import React from "react";
import "./main.css";
import {Link} from '@inertiajs/inertia-react'

const Pagination = (props) => {
    return (
        <div className="pagination flex center">
            {
                props.links.map((item, index) => (

                        index == 0 ?
                            <Link style={{marginRight: "20px"}} href={item.url} key={index} className="arr">
                                <img src="/images/icons/arrows/1b.svg" alt=""/>
                            </Link> :
                            (index > 0 && index < props.links.length - 1 ?
                                <Link style={{marginRight: "20px"}} key={index} href={item.url}
                                      className={'num' + (item.active ? " active" : "")}>{item.label}</Link>
                                :
                                (index == props.links.length - 1 ? <Link key={index} href={item.url} className="arr">
                                    <img src="/images/icons/arrows/2b.svg" alt=""/></Link> : ""))
                    )
                )
            }
        </div>
    );
};

export default Pagination;
