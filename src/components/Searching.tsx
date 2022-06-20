import "../css/search.css";
import useQuery from "./spotify";

interface searchKeyProp {
  searchKey: string;
}

function Searching({ searchKey }: searchKeyProp) {
  /* Получение результатов поиска и запись в переменную. Поиск идет по searchKey, лимит постаил 30, чтобы не перегружать страницу */
  const { error, isLoading, data } = useQuery(
    "/search?q=" + searchKey + "&type=track%2Cartist&limit=30",
    "GET"
  );

  if (isLoading) {
    return <h3 className="main-search-h3">Загрузка результатов...</h3>;
  }
  if (error) {
    console.log(error);
    return (
      <div>
        <h1>Произошла ошибка при загрузке данных</h1>
        <p>Подробнее: {error.message} </p>
      </div>
    );
  }
  return (
    <div className="main__songs">
      {data?.tracks.items.map((sings) => (
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
      ))}
      {data?.tracks.items.length || (
        <h3 className="main-search-h3 left-30">Результаты не найдены</h3>
      )}
    </div>
  );
}

export default Searching;
