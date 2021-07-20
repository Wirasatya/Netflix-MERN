import React, { useContext, useEffect, useState } from "react";
import "./widgetSm.scss";
import { Visibility } from "@material-ui/icons";
import axios from "axios";
import { AuthContext } from "../../context/authContext/AuthContext";

const WidgetSm = () => {
  const { user } = useContext(AuthContext);
  const [newUsers, setNewUsers] = useState([]);

  useEffect(() => {
    const getNewUsers = async () => {
      try {
        const res = await axios.get("/users?new=true", {
          headers: {
            token: "Bearer " + user.accessToken,
          },
        });
        setNewUsers(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getNewUsers();
  }, [user]);
  return (
    <div className="widgetSm">
      <span className="title">New Join Members</span>
      <ul className="list">
        {newUsers.map((user) => (
          <li key={user.username} className="listItem">
            <img
              src={
                user?.profilePic ||
                "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
              }
              alt=""
              className="img"
            />
            <div className="user">
              <span className="username">{user?.username}</span>
            </div>
            <button className="button">
              <Visibility className="icon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetSm;
