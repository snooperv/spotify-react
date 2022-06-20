import React from "react";
import "../css/login.css";
import { loginUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      <img className="login__img" src="img/logo.svg" alt="Spotify logo" />
      <a className="login__a" href={loginUrl}>
        Войти с помощью Spotify
      </a>
    </div>
  );
}

export default Login;
