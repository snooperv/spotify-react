import "../css/media.css";
import useQuery from "./spotify";

function Media() {
  const { error, isLoading, data } = useQuery("/me/albums", "GET");

  if (error) {
    return (
      <div>
        <h3>Произошла ошибка при загрузке данных</h3>
        <p>Подробнее: {error.message} </p>
      </div>
    );
  }

  const renderResults = () => {
    /* Рендер результатов альбомов */
    return data?.items.map((album) => (
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
      {isLoading ? (
        <h3>Загрузка списка альбомов...</h3>
      ) : (
        <div className="main__media-cards">{renderResults()}</div>
      )}
    </div>
  );
}

export default Media;
