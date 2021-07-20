import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import React from "react";
import "./featuredInfo.scss";

const FeaturedInfo = () => {
  return (
    <div className="featuredInfo">
      <div className="item">
        <span className="title">Revanue</span>
        <div className="moneyContainer">
          <span className="money">$2,415</span>
          <span className="rate">
            -11.4 <ArrowDownward className="icon negative"></ArrowDownward>
          </span>
        </div>
        <span className="sub">Compared to last month</span>
      </div>
      <div className="item">
        <span className="title">Sales</span>
        <div className="moneyContainer">
          <span className="money">$4,415</span>
          <span className="rate">
            -1.4 <ArrowDownward className="icon negative"></ArrowDownward>
          </span>
        </div>
        <span className="sub">Compared to last month</span>
      </div>
      <div className="item">
        <span className="title">Cost</span>
        <div className="moneyContainer">
          <span className="money">$2,225</span>
          <span className="rate">
            +2.4 <ArrowUpward className="icon"></ArrowUpward>
          </span>
        </div>
        <span className="sub">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
