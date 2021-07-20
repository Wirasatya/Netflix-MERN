import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import React from "react";
import "./userEdit.scss";

const UserEdit = () => {
  return (
    <div className="userEdit">
      <div className="titleContainer">
        <h1 className="title">Edit User</h1>
        <Link to="/newUser">
          <button className="addButton">Create</button>
        </Link>
      </div>
      <div className="container">
        <div className="show">
          <div className="showTop">
            <img
              src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="showImg"
            />
            <div className="showTopTitle">
              <span className="showUsername">Anna Becker</span>
              <span className="showUserTitle">software Engineer</span>
            </div>
          </div>
          <div className="showBottom">
            <span className="showTitle">Account Details</span>
            <div className="showInfo">
              <PermIdentity className="showIcon" />
              <span className="showInfoTitle">annabeck99</span>
            </div>
            <div className="showInfo">
              <CalendarToday className="showIcon" />
              <span className="showInfoTitle">10.12.1999</span>
            </div>
            <span className="showTitle">Contact Details</span>
            <div className="showInfo">
              <PhoneAndroid className="showIcon" />
              <span className="showInfoTitle">+1 123 456 67</span>
            </div>
            <div className="showInfo">
              <MailOutline className="showIcon" />
              <span className="showInfoTitle">annabeck99@gmail.com</span>
            </div>
            <div className="showInfo">
              <LocationSearching className="showIcon" />
              <span className="showInfoTitle">New York | USA</span>
            </div>
          </div>
        </div>
        <div className="update">
          <span className="updateTitle">Edit</span>
          <form className="updateForm">
            <div className="updateLeft">
              <div className="updateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="annabeck99"
                  className="updateInput"
                />
              </div>
              <div className="updateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="Anna Becker"
                  className="updateInput"
                />
              </div>
              <div className="updateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="annabeck99@gmail.com"
                  className="updateInput"
                />
              </div>
              <div className="updateItem">
                <label>Phone</label>
                <input
                  type="text"
                  placeholder="+1 123 456 67"
                  className="updateInput"
                />
              </div>
              <div className="updateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="updateInput"
                />
              </div>
            </div>
            <div className="updateRight">
              <div className="updateUpload">
                <img
                  className="updateImg"
                  src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="updateIcon" />
                </label>
                <input type="file" id="file" />
              </div>
              <button className="updateButton">update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserEdit;
