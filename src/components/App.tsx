import React, { useEffect, useState } from "react";
import "../css/App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import { Navigate } from "react-router-dom";

function App() {
  /* Первая страница, которая встречает пользователя */
  const [token, setToken] = useState("");
  useEffect(() => {
    let token = /* localStorage.getItem("token"); */
      "BQCU4uTZf40BbOZ3wfWYYvudm_waP_c0BtOuStB0LkADLnp41HJSBnw1mPDP4v5K4C4V7zxH9sJhj9dE0Pw2X8_BCM289yS3Uuc9FX6J2CYzlErwAxYYykSI3_2U-iDDj3YaD_J1M9ejgd2LEDSmQmH6o55W4tvb8f518y-0Ld_SQyA1VDVwy5103bsW1WdNTideKxB6WHWHVYfF6g"; /* Получаю токен из локального хранилища */
    if (!token) {
      /* Если токена нет, назначаю токен */
      const hash =
        getTokenFromUrl(); /* Функция, которая получает токен из url после входа в аккаунт спотифай */
      token = hash.access_token;
      window.location.hash = "";
      localStorage.setItem(
        "timeStart",
        String(Date.now() / 1000)
      ); /* Задаю начальное время токена (в дальнейшем будет проверятся: если прошел час, токен аннулируется) */
    }
    if (token) {
      /* Если токен был получен, кладу в хранилище */
      setToken(token);
      localStorage.setItem("token", token);
    }
  }, []);
  return (
    <div className="app">{token ? <Navigate to="/" /> : <Login />}</div>
  ); /* Если токен есть, возвращается главная страница, если нет, переходит опять на страницу входа */
}

export default App;
