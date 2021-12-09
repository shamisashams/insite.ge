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
                                        <span>კომენტარი</span>
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
                    <th>მიახლოებითი შედეგი</th>
                    <th>ფასი</th>
                    <th>დრო</th>
                </tr>
                <tr>
                    <td>გთხოვთ გაითვალისწინოთ რომ ეს კალკულაცია არის მიახლოებით. ფასი და დრო შეიძლება შეიცვალოს თქვენი მოთხოვნებიდან გამომდინარე.</td>
                    <td className="total_cost">₾{totalPrice}</td>
                    <td className="total_time">{totalStartTime}-{totalEndTime} სთ</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CostTable;
