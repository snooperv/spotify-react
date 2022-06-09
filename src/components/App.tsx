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
      "BQC65cZfF-wYWqsXrJ7c2FteVrGfRUO-zpnv955-x3_pm4NVFkqUcrFCvUyD7ZQhzSxzP2LiGjGzW0QNOYHD0Vw5ygfwQYarromzxAhTqaVs_rRWTGB_0To4i0aU36ujzoExvFgEHskQ8kWydPDl8Qmqnr8ocNfeqshsi9hTPE1lMn-T91t9jl1sa1S2GKIcbLfzFO7B8zhBsdJBR-hwZOrwHReAs5pn9-Qkjvzoi8cj_1KWrSQ"; /* Получаю токен из локального хранилища */
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
