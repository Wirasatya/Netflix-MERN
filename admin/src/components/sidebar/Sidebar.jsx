import {
  AddToQueue,
  AttachMoney,
  BarChart,
  ChatBubbleOutline,
  DynamicFeed,
  LineStyle,
  List,
  MailOutline,
  PermIdentity,
  PlayCircleOutline,
  QueuePlayNext,
  Report,
  Storefront,
  Timeline,
  TrendingUp,
  WorkOutline,
} from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="wrapper">
        <div className="menu">
          <h3 className="title">Dashboard</h3>
          <ul className="list">
            <Link to="/" className="link">
              <li className="listItem active">
                <LineStyle className="icon"></LineStyle>
                Home
              </li>
            </Link>
            <li className="listItem">
              <Timeline className="icon"></Timeline>
              Analytics
            </li>
            <li className="listItem">
              <TrendingUp className="icon"></TrendingUp>
              Sales
            </li>
          </ul>
        </div>
        <div className="menu">
          <h3 className="title">Quick Menu</h3>
          <ul className="list">
            <Link to="/userList" className="link">
              <li className="listItem">
                <PermIdentity className="icon"></PermIdentity>
                Users
              </li>
            </Link>
            <Link to="/movieList" className="link">
              <li className="listItem">
                <PlayCircleOutline className="icon"></PlayCircleOutline>
                Movies
              </li>
            </Link>
            <Link to="/listList" className="link">
              <li className="listItem">
                <List className="icon"></List>
                Lists
              </li>
            </Link>
            <Link to="/movieNew" className="link">
              <li className="listItem">
                <AddToQueue className="icon"></AddToQueue>
                Add Movie
              </li>
            </Link>
            <Link to="/listNew" className="link">
              <li className="listItem">
                <QueuePlayNext className="icon"></QueuePlayNext>
                Add List
              </li>
            </Link>
            <li className="listItem">
              <AttachMoney className="icon"></AttachMoney>
              Transactions
            </li>
            <li className="listItem">
              <BarChart className="icon"></BarChart>
              Reports
            </li>
          </ul>
        </div>
        <div className="menu">
          <h3 className="title">Notifications</h3>
          <ul className="list">
            <li className="listItem">
              <MailOutline className="icon"></MailOutline>
              Mail
            </li>
            <li className="listItem">
              <DynamicFeed className="icon"></DynamicFeed>
              Feedback
            </li>
            <li className="listItem">
              <ChatBubbleOutline className="icon"></ChatBubbleOutline>
              Messages
            </li>
          </ul>
        </div>
        <div className="menu">
          <h3 className="title">Staff</h3>
          <ul className="list">
            <li className="listItem">
              <WorkOutline className="icon"></WorkOutline>
              Manage
            </li>
            <li className="listItem">
              <Timeline className="icon"></Timeline>
              Analytics
            </li>
            <li className="listItem">
              <Report className="icon"></Report>
              Report
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
