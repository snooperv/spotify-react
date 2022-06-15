import { useState, useEffect } from "react";
import "../css/first.css";
import { Spotify } from "./spotify";

interface useQuery {
  /* Задаю структуру переменной плейлиста */
  data?: {
    id: string;
    description: string;
    images: [{ url: string }];
    name: string;
    tracks: {
      items: [
        {
          track: {
            id: string;
            album: {
              name: string;
              images: [{ url: string }, { url: string }, { url: string }];
            };
            artists: [{ name: string }];
            name: string;
          };
        }
      ];
    };
  };
  error: boolean;
  errorText?: string;
  isLoading: boolean;
}

function First() {
  const { dayPlaylist } = Spotify(); /* Подключаю запрос плейлиста */
  const [playlist, setPlaylist] = useState<useQuery>();

  useEffect(() => {
    setPlaylist({ error: false, isLoading: true });
    /* Получаю плейлист и сохраняю в переменную */
    dayPlaylist("37i9dQZF1E361aZi6orfUx")
      .then((data) => {
        setPlaylist({ data, error: false, isLoading: false });
      })
      .catch((error) => {
        setPlaylist({ error: true, errorText: error, isLoading: false });
      });
  }, []);

  const renderResults = () => {
    if (!playlist?.isLoading && playlist?.data) {
      /* Рендер полученных результатов */
      return playlist.data.tracks.items.map((sings) => (
        <div className="songRow" key={sings.track.id}>
          {sings.track.album.images[2] ? (
            <img
              className="songRow__album"
              src={sings.track.album.images[2].url}
              alt={sings.track.album.name}
            />
          ) : (
            <div>Нет изображения</div>
          )}
          <div className="songRow__info">
            <h1 className="songRow__info-h1">{sings.track.name}</h1>
            <p className="songRow__info-p">
              {sings.track.artists[0].name} - {sings.track.album.name}
            </p>
          </div>
        </div>
      ));
    } else {
      return <h3>Загрузка плейлиста...</h3>;
    }
  };

  if (playlist?.error) {
    return (
      <div>
        <h3>Произошла ошибка при загрузке данных</h3>
        <p>Подробнее: {playlist?.errorText || "Неизвестная ошибка"} </p>
      </div>
    );
  }
  return (
    <div>
      {!playlist?.isLoading && playlist?.data ? (
        <div className="main__info">
          <img
            className="main__info-img"
            alt={playlist.data.name}
            src={playlist.data.images[0].url}
          />
          <div className="main__infoText">
            <strong>ПЛЕЙЛИСТ</strong>
            <h2 className="main__infoText-h2">{playlist.data.name}</h2>
            <p className="main__infoText-p">{playlist.data.description}</p>
          </div>
        </div>
      ) : (
        <h3>Загрузка информации о плейлисте...</h3>
      )}
      <div className="main__songs">
        <div className="main__icons">
          <svg
            className="svgIcon main__shuffle main__svgIcon"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"></path>
          </svg>
          <svg
            role="img"
            height="32"
            width="32"
            viewBox="0 0 24 24"
            className="svgIcon main__svgIcon MuiSvgIcon-fontSizeLarge"
          >
            <path d="M5.21 1.57a6.757 6.757 0 016.708 1.545.124.124 0 00.165 0 6.741 6.741 0 015.715-1.78l.004.001a6.802 6.802 0 015.571 5.376v.003a6.689 6.689 0 01-1.49 5.655l-7.954 9.48a2.518 2.518 0 01-3.857 0L2.12 12.37A6.683 6.683 0 01.627 6.714 6.757 6.757 0 015.21 1.57zm3.12 1.803a4.757 4.757 0 00-5.74 3.725l-.001.002a4.684 4.684 0 001.049 3.969l.009.01 7.958 9.485a.518.518 0 00.79 0l7.968-9.495a4.688 4.688 0 001.049-3.965 4.803 4.803 0 00-3.931-3.794 4.74 4.74 0 00-4.023 1.256l-.008.008a2.123 2.123 0 01-2.9 0l-.007-.007a4.757 4.757 0 00-2.214-1.194z"></path>
          </svg>
          <svg
            role="img"
            height="32"
            width="32"
            viewBox="0 0 24 24"
            className="svgIcon main__svgIcon"
          >
            <path d="M4.5 13.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm15 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm-7.5 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
          </svg>
        </div>
        {renderResults()}
      </div>
    </div>
  );
}

export default First;
