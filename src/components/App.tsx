import React, { useEffect, useState } from "react";
import "../css/App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import { Navigate } from "react-router-dom";

function App() {
  /* Первая страница, которая встречает пользователя */
  const [token, setToken] = useState("");
  useEffect(() => {
    let token =
      "BQAx3_yn2B0-HmjxX61pdsFZJlGVEMH2RF1sgeTNjA78pUCGgJ7cy9iNSRu31uMo0r7wc3EN75V6oJQfgs7sSQc2Dg52wUkzvdqfuaPNsiTgK3Y2f9jrbWAPw-8SRd_RZyOt7ldj9ogFTAvRhxQrE41o8n72BY8bNMxj-Ie0asQQnIBLhP4Uq4-FLtmAeyVJTv4a8OvF3a27bs3_Qw"; /* Получаю токен из локального хранилища */
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
