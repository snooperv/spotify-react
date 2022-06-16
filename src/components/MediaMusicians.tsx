import "../css/media.css";
import useQuery from "./spotify";

interface artistsProp {
  /* Структура переменной исполнителей */
  artists: {
    items: [
      {
        id: string;
        name: string;
        images: [{ url: string }, { url: string }, { url: string }];
      }
    ];
  };
}

function Media() {
  const { error, isLoading, data } = useQuery<artistsProp>(
    "/me/following?type=artist",
    "GET"
  );

  if (error) {
    return (
      <div>
        <h3>Произошла ошибка при загрузке данных</h3>
        <p>Подробнее: {error.message} </p>
      </div>
    );
  }

  const renderResults = () => {
    /* Рендер результатов исполнителей */
    return data?.artists.items.map((artist) => (
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
  };

  return (
    <div className="main__media">
      <h1 className="main__media-header">Исполнители</h1>
      {isLoading ? (
        <h3>Загрузка списка исполнителей...</h3>
      ) : (
        <div className="main__media-cards">{renderResults()}</div>
      )}
    </div>
  );
}

export default Media;
