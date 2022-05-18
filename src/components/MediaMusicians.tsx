import "../css/media.css";
import { Spotify } from "./spotify";
import { useState, useEffect } from "react";

function Media() {
  const { myArtists } = Spotify(); /* Функция запроса получения исполнителей */
  const [artists, setArtists] = useState({ /* Структура переменной исполнителей */
    artists: {
      items: [
        {
          id: "",
          name: "",
          images: [{ url: "" }],
        },
      ],
    },
  });
  useEffect(() => { /* Получение и запись исполнителей */
    myArtists().then((data) => {
      setArtists(data);
    });
  }, []);

  const renderResults = () => { /* Рендер результатов исполнителей */
    return artists.artists.items.map((artist) => (
      <div className="main__media-card" key={artist.id}>
          <img src={artist.images[0].url} alt="card image" className="card__img" />
          <div className="card__singer">{artist.name}</div>
          <div className="card__type">Исполнитель</div>
        </div>
    ));
  };

  return (
    <div className="main__media">
      <h1 className="main__media-header">Исполнители</h1>
      <div className="main__media-cards">
        {renderResults()}
      </div>
    </div>
  );
}

export default Media;
