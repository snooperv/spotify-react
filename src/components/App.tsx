import React, { useEffect, useState } from "react";
import "../css/App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import { Navigate } from "react-router-dom";

function App() {
  token = GetToken();
  return (
    <div className="app">{token ? <Navigate to="/home" /> : <Login />}</div>
  );
}

function GetToken() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      setToken(_token);
    }
  }, []);
  return token;
}

export default App;
export let token: string;
