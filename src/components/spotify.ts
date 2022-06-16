import { useEffect, useState } from "react";

/* На странице https://developer.spotify.com/dashboard/applications нужно добавить этот путь */
const redirectUri = "http://localhost:3000/login";

/* А сюда нужно добавить свой clientId */
const clientId = "9d512335ed36406696a10ab1ebbfea0b";

const authEndpoint = "https://accounts.spotify.com/authorize";
const apiUrl = "https://api.spotify.com/v1";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  "user-follow-read",
  "user-library-read",
];

const getTokenFromUrl = () => {
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

let token: string | null;

export const useGetToken = () => {
  token = localStorage.getItem("token");
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
    localStorage.setItem("token", token);
  }
  return token;
};

interface SearchResultsProps {
  query: string;
  limit: number;
}

export const searchResults = ({ query, limit }: SearchResultsProps) => {
  /* Получение результатов поиска */
  const qs = `q=${query}&type=track%2Cartist&limit=${limit}`;

  return fetch(`${apiUrl}/search?${qs}`, {
    headers: {
      Authorization: `Bearer ` + token,
    },
    method: "GET",
  }).then((data) => {
    /* Данные возвращаются в json формате */
    return data.json();
  });
};

export const isLogOut = () => {
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

interface IQueryData<T> {
  data?: T;
  error?: Error;
  isLoading: boolean;
}

function useQuery<T>(path: string, method: string): IQueryData<T> {
  const [query, setQuery] = useState<IQueryData<T>>({ isLoading: true });

  useEffect(() => {
    fetch(`${apiUrl}${path}`, {
      headers: {
        Authorization: `Bearer ` + token,
      },
      method,
    })
      .then((response) => {
        if (response.status >= 400 && response.status < 600) {
          let err = new Error();
          if (response.status === 401) {
            err = Error(
              "Неверный или просроченный токен. Пожалуйста, перезагрузите страницу"
            );
          } else if (response.status === 403) {
            err = Error(
              "Неверный запрос OAuth. Недостаточно разрешений для выполнения действия. Обратитесь к разработчику сайта"
            );
          } else if (response.status === 404) {
            err = Error(
              "Извините, один или более элементов не загрузились. Страница будет перезагружена"
            );
          } else if (response.status >= 400 && response.status < 600) {
            err = Error(
              "Извините, произошла неизвестная ошибка. Пожалуйста, перезагрузите страницу"
            );
          }
          localStorage.removeItem("token");
          throw err;
        }
        return response.json();
      })
      .then((data) => {
        setQuery({
          data: data,
          isLoading: false,
        });
      })
      .catch((e) => {
        setQuery({
          error: e,
          isLoading: false,
        });
        console.log("Ошибка загрузки: " + e.message);
      });
  }, []);

  return query;
}

export default useQuery;
