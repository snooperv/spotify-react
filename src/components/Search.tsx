import "../css/search.css";
import { searchResults } from "./spotify";
import { useState } from "react";

interface searchProp {
  artists: {
    /* В дальнейшем я хочу сделать поиск и по исполнителям */
    items: [
      {
        images: [{ url: string }, { url: string }, { url: string }];
        name: string;
      }
    ];
  };
  tracks: {
    /* Пока что поиск идет по трекам */
    items: [
      {
        id: string;
        album: {
          name: string;
          images: [{ url: string }, { url: string }, { url: string }];
        };
        artists: [{ name: string }];
        name: string;
      }
    ];
  };
}

function Search() {
  const [searchKey, setSearchKey] = useState("");
  const [results, setResults] = useState<searchProp>();
  const [isLoading, setIsLoading] = useState(false);
  const [isFind, setIsFind] = useState(false);
  const [error, setError] = useState<Error>();

  const Searching = () => {
    /* Получение результатов поиска и запись в переменную. Поиск идет по searchKey, лимит постаил 30, чтобы не перегружать страницу */
    if (searchKey !== "") {
      setIsLoading(true);
      searchResults({ query: searchKey, limit: 30 })
        .then((result) => {
          if (
            result.tracks.items.length === 0 ||
            result.artists.items.length === 0
          ) {
            setIsFind(false);
          } else {
            setResults({
              artists: result.artists,
              tracks: result.tracks,
            });
            setIsFind(true);
          }
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error.message);
        });
    }
  };

  const renderResults = () => {
    if (isLoading) {
      return <h3 className="main-search-h3">Загрузка результатов...</h3>;
    }
    if (isFind && results) {
      /* Рендер результатов поиска */
      return results.tracks.items.map((sings) => (
        <div className="songRow" key={sings.id}>
          {sings.album.images.length > 2 ? (
            <img
              className="songRow__album"
              src={sings.album.images[2].url}
              alt={sings.album.name}
            />
          ) : (
            <div>No Image</div>
          )}
          <div className="songRow__info">
            <h1 className="songRow__info-h1">{sings.name}</h1>
            <p className="songRow__info-p">
              {sings.artists[0].name} - {sings.album.name}
            </p>
          </div>
        </div>
      ));
    }
    if (!results) {
      return <h3 className="main-search-h3">Введите текст для поиска</h3>;
    }
    return <h3 className="main-search-h3">Результаты не найдены</h3>;
  };

  if (error) {
    return (
      <div>
        <h1>Произошла ошибка при загрузке данных</h1>
        <p>Подробнее: {error} </p>
      </div>
    );
  }
  return (
    <div className="main__search">
      <div className="header__left">
        <svg
          className="svgIconSearch"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
          onClick={() =>
            Searching()
          } /* При нажатии на значок лупы происходит поиск */
        >
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
        </svg>
        <input
          placeholder="Исполнитель, трек или подкаст"
          type="text"
          className="header__search"
          onChange={(e) =>
            setSearchKey(e.target.value)
          } /* При каждом введенном символе перезаписывается переменная searchKey */
          onKeyDown={(e) => {
            if (e.keyCode === 13) {
              /* При нажатии на Enter происходит поиск */
              Searching();
            }
          }}
        />
      </div>
      <h2 className="main-search-h2">Результаты поиска</h2>
      <div className="main__songs">{renderResults()}</div>
    </div>
  );
}

export default Search;
