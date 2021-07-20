import React, { useContext, useState } from "react";
import { login } from "../../context/authContext/apiCalls";
import { AuthContext } from "../../context/authContext/AuthContext";
import "./login.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFetching, dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    login({ email, password }, dispatch);
  };

  return (
    <div className="login">
      <form className="form">
        <input
          type="text"
          placeholder="email"
          className="input"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          className="input"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="button" onClick={handleLogin} disabled={isFetching}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
