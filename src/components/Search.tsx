import "../css/search.css";
import { useState } from "react";
import Searching from "./Searching";



function Search() {
  const [searchKey, setSearchKey] = useState("");
  const [results, setResults] = useState<JSX.Element>();

  const canResults = () => {
    if (searchKey !== "") {
      setResults(<Searching searchKey={searchKey} />);
    }
  };

  return (
    <div className="main__search">
      <div className="header__left">
        <svg
          className="svgIconSearch"
          focusable="false"
          viewBox="0 0 24 24"
          aria-hidden="true"
          onClick={() =>
            canResults()
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
              canResults();
            }
          }}
        />
      </div>
      <h2 className="main-search-h2">Результаты поиска</h2>
      {results || <h3 className="main-search-h3">Введите данные для поиска</h3>}
    </div>
  );
}

export default Search;
