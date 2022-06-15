import "../css/header.css";
import HeaderMedia from "./HeaderMedia";
import { Spotify } from "./spotify";
import { useState, useEffect } from "react";

interface HeaderProps {
  page: string;
}

interface useQuery {
  /* Задаю структуру пользователя */
  userProfile?: {
    userName: string;
    userImg: string;
  };
  error: boolean;
  errorText?: string;
  isLoading: boolean;
}

function Header({ page }: HeaderProps) {
  const { getAboutMe } = Spotify(); /* Подключаю запрос информации о пользователе */
  const [userInfo, setUserInfo] = useState<useQuery>();

  useEffect(() => {
    setUserInfo({ error: false, isLoading: true });
    getAboutMe()
      .then((result) => {
        /* Получаю данные о пользователе */
        setUserInfo({
          userProfile: {
            userName: result.display_name,
            userImg:
              "img/avatar.svg" /* Изначально ставлю дефолтную картинку */,
          },
          error: false,
          isLoading: false,
        });
      })
      .catch((error) => {
        setUserInfo({ error: true, errorText: error, isLoading: false });
      });
  }, []);

  const [userMenu, setUserMenu] = useState({ open: false });
  const downList = () => {
    /* Открывающееся меню пользователя (справа сверху) */
    setUserMenu({ open: !userMenu.open });
  };
  const logout = () => {
    /* Обработка кнопки выхода. Удаляю токен и перезагружаю страницу, так как на главной странице Main есть проверка на токен, то перебрасывает на страницу входа */
    localStorage.removeItem("token");
    window.location.reload();
  };

  if (userInfo?.error) {
    return (
      <div>
        <h3>Произошла ошибка при загрузке данных</h3>
        <p>Подробнее: {userInfo?.errorText || "Неизвестная ошибка"} </p>
      </div>
    );
  }
  return (
    <div className="header">
      {page.startsWith("media") ? <HeaderMedia /> : ""}
      <div className="header__left-fake"></div>
      {userInfo?.isLoading ? (
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
                src={userInfo?.userProfile ? userInfo.userProfile.userImg : ""}
                alt={
                  userInfo?.userProfile
                    ? userInfo.userProfile.userName
                    : "Фото не загружено"
                }
                className="header__avatar"
              />
            </div>
          </figure>
          <span dir="auto" className="header__username">
            {userInfo?.userProfile
              ? userInfo.userProfile.userName
              : "Имя не загружено"}
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
