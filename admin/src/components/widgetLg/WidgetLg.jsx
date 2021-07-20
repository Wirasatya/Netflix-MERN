import React from "react";
import "./widgetLg.scss";

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={"button " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="title">Latest transactions</h3>
      <table className="table">
        <tbody className="tbody">
          <tr className="tr">
            <th className="th">Customer</th>
            <th className="th">Date</th>
            <th className="th">Amount</th>
            <th className="th">Status</th>
          </tr>
          <tr className="tr">
            <td className="user">
              <img
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="img"
              />
              <span className="name">Susan Carol</span>
            </td>
            <td className="date">2 Jun 2021</td>
            <td className="amount">$122.00</td>
            <td className="status">
              <Button type="approved" />
            </td>
          </tr>
          <tr className="tr">
            <td className="user">
              <img
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="img"
              />
              <span className="name">Susan Carol</span>
            </td>
            <td className="date">2 Jun 2021</td>
            <td className="amount">$122.00</td>
            <td className="status">
              <Button type="declined" />
            </td>
          </tr>
          <tr className="tr">
            <td className="user">
              <img
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="img"
              />
              <span className="name">Susan Carol</span>
            </td>
            <td className="date">2 Jun 2021</td>
            <td className="amount">$122.00</td>
            <td className="status">
              <Button type="pending" />
            </td>
          </tr>
          <tr className="tr">
            <td className="user">
              <img
                src="https://images.pexels.com/photos/4172933/pexels-photo-4172933.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
                className="img"
              />
              <span className="name">Susan Carol</span>
            </td>
            <td className="date">2 Jun 2021</td>
            <td className="amount">$122.00</td>
            <td className="status">
              <Button type="approved" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WidgetLg;
