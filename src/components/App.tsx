import React, { useEffect, useState } from "react";
import "../css/App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import { Navigate } from "react-router-dom";

function App() {
  /* Первая страница, которая встречает пользователя */
  const [token, setToken] = useState("");
  useEffect(() => {
    let token = localStorage.getItem("token"); /* Получаю токен из локального хранилища */
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
