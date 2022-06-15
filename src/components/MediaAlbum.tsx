import "../css/media.css";
import { Spotify } from "./spotify";
import { useState, useEffect } from "react";

interface useQuery {
  /* Структура переменной альбома */
  items?: [
    {
      album: {
        id: string;
        artists: [{ name: string }];
        name: string;
        images: [{ url: string }, { url: string }, { url: string }];
      };
    }
  ];
  error: boolean;
  errorText?: string;
  isLoading: boolean;
}

function Media() {
  const { myAlbums } = Spotify(); /* Функция запроса получения альбомов */
  const [albums, setAlbums] = useState<useQuery>();

  useEffect(() => {
    setAlbums({ error: false, isLoading: true });
    /* Получение и запись альбомов */
    myAlbums()
      .then((data) => {
        setAlbums({
          items: data.items,
          error: false,
          isLoading: false,
        });
      })
      .catch((error) => {
        setAlbums({ error: true, errorText: error, isLoading: false });
      });
  }, []);

  const renderResults = () => {
    if (!albums?.isLoading && albums?.items) {
      /* Рендер результатов альбомов */
      return albums.items.map((album) => (
        <div className="main__media-card" key={album.album.id}>
          <img src={album.album.images[0].url} className="card__img-album" />
          <div className="card__singer">{album.album.name}</div>
          <div className="card__type">{album.album.artists[0].name}</div>
        </div>
      ));
    } else {
      return <h3>Загрузка альбомов...</h3>;
    }
  };

  if (albums?.error) {
    return (
      <div>
        <h1>Произошла ошибка при загрузке данных</h1>
        <p>Подробнее: {albums?.errorText || "Неизвестная ошибка"} </p>
      </div>
    );
  }
  return (
    <div className="main__media">
      <h1 className="main__media-header">Альбомы</h1>
      <div className="main__media-cards">{renderResults()}</div>
    </div>
  );
}

export default Media;
