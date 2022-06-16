import { useEffect, useState } from "react";

interface IQueryData<T> {
  data?: T;
  error?: Error;
  isLoading: boolean;
}

function useQuery<T>(path: string, method: string): IQueryData<T> {
  const apiUrl = "https://api.spotify.com/v1";
  const token = localStorage.getItem("token");
  const [query, setQuery] = useState<IQueryData<T>>({ isLoading: true });

  useEffect(() => {
    fetch(`${apiUrl}${path}`, {
      headers: {
        Authorization: `Bearer ` + token,
      },
      method,
    })
      .then((response) => {
        if (response.status === 401) {
          setQuery({
            error: new Error(
              "Неверный или просроченный токен. Пожалуйста, перезагрузите страницу"
            ),
            isLoading: false,
          });
          localStorage.removeItem("token");
        } else if (response.status === 403) {
          setQuery({
            error: new Error(
              "Неверный запрос OAuth. Недостаточно разрешений для выполнения действия. Обратитесь к разработчику сайта"
            ),
            isLoading: false,
          });
          localStorage.removeItem("token");
        } else if (response.status === 404) {
          setQuery({
            error: new Error(
              "Извините, один или более элементов не загрузились. Страница будет перезагружена"
            ),
            isLoading: false,
          });
        } else if (response.status > 405 && response.status < 600) {
          setQuery({
            error: new Error(
              "Извините, произошла неизвестная ошибка. Пожалуйста, перезагрузите страницу"
            ),
            isLoading: false,
          });
          localStorage.removeItem("token");
        }
        return response;
      })
      .then((data) => {
        return data.json();
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
        console.log(e.response);
      });
  }, []);

  return query;
}

export default useQuery;
