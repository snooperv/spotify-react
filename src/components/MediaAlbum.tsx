import "../css/media.css";
import { Spotify } from "./spotify";
import { useState, useEffect } from "react";

function Media() {
  const { myAlbums } = Spotify(); /* Функция запроса получения альбомов */
  const [albums, setAlbums] = useState({ /* Структура переменной альбома */
    items: [
      {
        album: {
          id: "",
          artists: [{ name: "" }],
          name: "",
          images: [{ url: "" }],
        },
      },
    ],
  });
  useEffect(() => { /* Получение и запись альбомов */
    myAlbums().then((data) => {
      setAlbums(data);
    });
  }, []);

  const renderResults = () => { /* Рендер результатов альбомов */
    return albums.items.map((album) => (
      <div className="main__media-card" key={album.album.id}>
        <img src={album.album.images[0].url} className="card__img-album" />
        <div className="card__singer">{album.album.name}</div>
        <div className="card__type">{album.album.artists[0].name}</div>
      </div>
    ));
  };

  return (
    <div className="main__media">
      <h1 className="main__media-header">Альбомы</h1>
      <div className="main__media-cards">
        {renderResults()}
      </div>
    </div>
  );
}

export default Media;
