import { Avatar } from "@material-ui/core";
import { Language, NotificationsNone, Settings } from "@material-ui/icons";
import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext/AuthContext";
import "./topbar.scss";
import { useHistory } from "react-router-dom";
import { logout } from "../../context/authContext/AuthActions";

const Topbar = () => {
  const { dispatch } = useContext(AuthContext);
  const history = useHistory();
  const handleLogout = () => {
    dispatch(logout());
    history.replace("/login");
  };
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <span>ADMIN DASHBOARD.</span>
        </div>
        <div className="right">
          <div className="iconContainer">
            <NotificationsNone></NotificationsNone>
            <span className="badge">2</span>
          </div>
          <div className="iconContainer">
            <Language></Language>
            <span className="badge">EN</span>
          </div>
          <div className="iconContainer">
            <Settings></Settings>
            <div className="options">
              <span>Settings</span>
              <span onClick={handleLogout}>Logout</span>
            </div>
          </div>
          <Avatar className="avatar"></Avatar>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
