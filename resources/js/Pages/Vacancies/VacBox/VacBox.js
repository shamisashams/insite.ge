import React from "react";
import {Link} from '@inertiajs/inertia-react'
import {locale_route} from '../../../Pages/Helpers/locale_route';

const VacBox = (props) => {
    return (
        <div className="vac_box">
            <div className="main flex">
                <div>
                    <div className="title bold">
                        {props.title} <span>({props.experience})</span>
                    </div>
                    <p className="description op06">{props.description}</p>
                </div>
                <div className="btns">
                    <button className="button">{props.time} </button>
                    <Link href={'/show-vacancy/' + props.id}>
                        <button className="button apply">Apply</button>
                    </Link>
                </div>
            </div>
            <div className="bottom flex">
                <div className="bold">Salary: {props.salary}</div>
                <div className="bold">
                    <img src="/images/icons/vacancy/1.svg" alt=""/> {props.location}
                </div>
            </div>
        </div>
    );
};

export default VacBox;
