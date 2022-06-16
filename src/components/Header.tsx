import "../css/header.css";
import HeaderMedia from "./HeaderMedia";
import { useState } from "react";
import useQuery from "./spotify";

interface HeaderProps {
  page: string;
}

interface userProp {
  display_name: string;
  images: [{ url: string }];
}

function Header({ page }: HeaderProps) {
  const { error, isLoading, data } = useQuery<userProp>("/me", "GET");
  const [userMenu, setUserMenu] = useState({ open: false });

  if (error) {
    return (
      <div>
        <h3>Произошла ошибка при загрузке данных</h3>
        <p>Подробнее: {error.message} </p>
      </div>
    );
  }

  const downList = () => {
    /* Открывающееся меню пользователя (справа сверху) */
    setUserMenu({ open: !userMenu.open });
  };
  const logout = () => {
    /* Обработка кнопки выхода. Удаляю токен и перезагружаю страницу, так как на главной странице Main есть проверка на токен, то перебрасывает на страницу входа */
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className="header">
      {page.startsWith("media") ? <HeaderMedia /> : ""}
      <div className="header__left-fake"></div>
      {isLoading ? (
        <p>Загрузка профиля...</p>
      ) : (
        <button
          className="header__profile"
          type="button"
          onClick={() => downList()}
        >
          <figure className="header__figure" title="Vadim">
            <div className="header__photo">
              <img
                src="img/avatar.svg"
                alt="Фото профиля"
                className="header__avatar"
              />
            </div>
          </figure>
          <span dir="auto" className="header__username">
            {data?.display_name}
          </span>
          {userMenu.open /* Стрелка вниз/вверх */ ? (
            <svg
              role="img"
              height="16"
              width="16"
              className="header__button-down"
              viewBox="0 0 16 16"
            >
              <path d="M14 10L8 4l-6 6h12z"></path>
            </svg>
          ) : (
            <svg
              role="img"
              height="16"
              width="16"
              className="header__button-down"
              viewBox="0 0 16 16"
            >
              <path d="M14 6l-6 6-6-6h12z"></path>
            </svg>
          )}
        </button>
      )}
      {userMenu.open /* Если userMenu.open == true, тогда откроется меню */ && (
        <div className="header__menu">
          <ul className="header__menu-list">
            <li className="header__menu-item">
              <span className="header__menu-text" onClick={() => logout()}>
                Выйти
              </span>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
