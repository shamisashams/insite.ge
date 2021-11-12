import React, {useState} from "react";

const CostTable = ({features, totalPrice, totalStartTime, totalEndTime}) => {
    const [time, setTime] = useState(null);

    return (
        <div>
            <table className="cost_table">
                <tbody>
                {

                    features.map((feature, index) => (
                        <React.Fragment key={index}>
                            <tr>
                                <th rowSpan={2 + feature.answer.length}>{feature.title}</th>
                            </tr>
                            {
                                feature.answer.map((item, index) => (
                                    <tr key={index}>
                                        <td>
                                            {item.title}
                                        </td>
                                        <td>{item.start_price}- {item.end_price}</td>
                                        <td>{item.start_time}h - {item.end_time}h</td>
                                    </tr>
                                ))

                            }
                            <tr className="comment">
                                <td>
                                    <div className="flex cm">
                                        <img src="/images/calculator/cm.svg" alt=""/>
                                        <span>Comment</span>
                                    </div>
                                    {feature.comment}
                                </td>
                            </tr>
                            {
                                index < features.length - 1 ?
                                    <tr className="border">
                                        <td></td>
                                    </tr> : <tr><td></td></tr>
                            }
                        </React.Fragment>
                    ))
                }
                </tbody>
            </table>


            <table className="result_table">
                <tbody>
                <tr>
                    <th>Rough estimate</th>
                    <th>Total cost</th>
                    <th>Time</th>
                </tr>
                <tr>
                    <td>
                        Please, do not forget, that additional features might increase
                        general scope of work, and proet, that additional features might
                        increase general scope of work, and project estimation.
                    </td>
                    <td className="total_cost">${totalPrice}</td>
                    <td className="total_time">{totalStartTime}-{totalEndTime} hrs</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CostTable;
