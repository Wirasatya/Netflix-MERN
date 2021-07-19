import { useState } from "react";
import "./login.scss";
import { useStateGlobal } from "../../context/StateProvider";
import axios from "../../axios";
import { useHistory } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [{ user }, dispatch] = useStateGlobal();
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    const userLogin = {
      email,
      password,
    };
    try {
      const res = await axios.post("auth/login", userLogin);
      dispatch({
        type: "SET_USER",
        user: res.data,
      });
      history.replace("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
        <form>
          <h1>Sign In</h1>
          <input
            type="email"
            placeholder="Email or phone number"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="loginButton" onClick={handleLogin}>
            Sign In
          </button>
          <span>
            New to Netflix?{" "}
            <b onClick={() => history.push("register")}>Sign up now.</b>
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <b>Learn more</b>.
          </small>
        </form>
      </div>
    </div>
  );
};

export default Login;
