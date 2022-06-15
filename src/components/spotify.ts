export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/login"; /* На странице https://developer.spotify.com/dashboard/applications нужно добавить этот путь */
const clientId = "9d512335ed36406696a10ab1ebbfea0b"; /* А сюда нужно добавить свой clientId */
export const apiUrl = "https://api.spotify.com/v1";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  "user-follow-read",
  "user-library-read",
];

export const getTokenFromUrl = () => {
  /* Функция получения токена из URL */
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial: { [parts: string]: string }, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

interface QueryProps {
  path: string;
  method: string;
}

interface SearchResultsProps {
  query: string;
  limit: number;
}

export const Spotify = () => {
  /* Все основные скрипты и запросы */
  const token =
    localStorage.getItem(
      "token"
    ); /* Решил лучше локально хранить токен, для этого и делал ощую функцию */

  const isLogOut = () => {
    /* Проверка на выход */
    if (!token) {
      return true;
    }
    const timeEnd = Date.now() / 1000;
    const timeStart = localStorage.getItem("timeStart");
    if (timeStart && timeEnd - parseInt(timeStart) > 3600) {
      /* Проверка на то, что прошел час */
      localStorage.removeItem("token");
      return true;
    }
    return false;
  };

  const callEndpoint = ({ path, method }: QueryProps) => {
    /* Основной шлюз запроса */
    return fetch(`${apiUrl}${path}`, {
      headers: {
        Authorization: `Bearer ` + token,
      },
      method,
    })
      .then((response) => {
        /* Обработка возможных ошибок */
        if (response.status === 401) {
          alert(
            "Неверный или просроченный токен. Вы будете перенаправлены на страницу входа"
          );
          localStorage.removeItem("token");
          window.location.reload();
        } else if (response.status === 403) {
          alert(
            "Неверный запрос OAuth. Недостаточно разрешений для выполнения действия. Обратитесь к разработчику сайта"
          );
          localStorage.removeItem("token");
          window.location.reload();
        } else if (response.status === 404) {
          alert(
            "Извините, один или более элементов не загрузились. Страница будет перезагружена"
          );
          window.location.reload();
        } else if (response.status > 405 && response.status < 600) {
          alert(
            "Извините, произошла неизвестная ошибка. Вы будете перенаправлены на страницу входа"
          );
          localStorage.removeItem("token");
          window.location.reload();
        }
        return response;
      })
      .then((data) => {
        /* Данные возвращаются в json формате */
        return data.json();
      })
      .catch((e) => {
        console.log("Ошибка загрузки: " + e.message);
        console.log(e.response);
      });
  };

  const getAboutMe = () => {
    /* Получение информации о пользователе */
    return callEndpoint({ path: "/me", method: "GET" });
  };

  const searchResults = ({ query, limit }: SearchResultsProps) => {
    /* Получение результатов поиска */
    const qs = `q=${query}&type=track%2Cartist&limit=${limit}`;

    return callEndpoint({ path: `/search?${qs}`, method: "GET" });
  };

  const dayPlaylist = (playlist: string) => {
    return callEndpoint({
      /* Получение плейлиста дня */ path: `/playlists/${playlist}`,
      method: "GET",
    });
  };

  const myArtists = () => {
    return callEndpoint({
      /* Получение сохраненных исполнителей */
      path: `/me/following?type=artist`,
      method: "GET",
    });
  };

  const myAlbums = () => {
    /* Получение сохраненных альбомов */
    return callEndpoint({
      path: `/me/albums`,
      method: "GET",
    });
  };

  return {
    isLogOut,
    getAboutMe,
    searchResults,
    dayPlaylist,
    myArtists,
    myAlbums,
  };
};
