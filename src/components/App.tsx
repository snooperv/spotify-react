import "../css/App.css";
import Login from "./Login";
import { useGetToken } from "./spotify";
import { Navigate } from "react-router-dom";

function App() {
  /* Первая страница, которая встречает пользователя */
  const token = useGetToken();
  return (
    <div className="app">{token ? <Navigate to="/" /> : <Login />}</div>
  ); /* Если токен есть, возвращается главная страница, если нет, переходит опять на страницу входа */
}

export default App;
