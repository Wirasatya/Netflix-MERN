import React from "react";

const UserNew = () => {
  return (
    <div className="userNew">
      <h1 className="title">Add User</h1>
      <form className="form">
        <div className="item">
          <label>Username</label>
          <input type="text" placeholder="john" />
        </div>
        <div className="item">
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" />
        </div>
        <div className="item">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div>
        <div className="item">
          <label>Password</label>
          <input type="password" placeholder="password" />
        </div>
        <div className="item">
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 78" />
        </div>
        <div className="item">
          <label>Address</label>
          <input type="text" placeholder="New York | USA" />
        </div>
        <div className="item">
          <label>Gender</label>
          <div className="gender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="item">
          <label>Active</label>
          <select className="select" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="button">Create</button>
      </form>
    </div>
  );
};
export default UserNew;
