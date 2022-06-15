import "../css/media.css";
import { Spotify } from "./spotify";
import { useState, useEffect } from "react";

interface useQuery {
  /* Структура переменной исполнителей */
  artists?: {
    items: [
      {
        id: string;
        name: string;
        images: [{ url: string }, { url: string }, { url: string }];
      }
    ];
  };
  error: boolean;
  errorText?: string;
  isLoading: boolean;
}

function Media() {
  const { myArtists } = Spotify(); /* Функция запроса получения исполнителей */
  const [artists, setArtists] = useState<useQuery>();

  useEffect(() => {
    setArtists({ error: false, isLoading: true });
    /* Получение и запись исполнителей */
    myArtists()
      .then((data) => {
        setArtists({
          artists: data.artists,
          error: false,
          isLoading: false,
        });
      })
      .catch((error) => {
        setArtists({ error: true, errorText: error, isLoading: false });
      });
  }, []);

  const renderResults = () => {
    if (!artists?.isLoading && artists?.artists) {
      /* Рендер результатов исполнителей */
      return artists.artists.items.map((artist) => (
        <div className="main__media-card" key={artist.id}>
          <img
            src={artist.images[0].url}
            alt="card image"
            className="card__img"
          />
          <div className="card__singer">{artist.name}</div>
          <div className="card__type">Исполнитель</div>
        </div>
      ));
    } else {
      return <h3>Загрузка списка исполнителей...</h3>;
    }
  };

  if (artists?.error) {
    return (
      <div>
        <h1>Произошла ошибка при загрузке данных</h1>
        <p>Подробнее: {artists?.errorText || "Неизвестная ошибка"} </p>
      </div>
    );
  }
  return (
    <div className="main__media">
      <h1 className="main__media-header">Исполнители</h1>
      <div className="main__media-cards">{renderResults()}</div>
    </div>
  );
}

export default Media;
