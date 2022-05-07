import "../css/header.css";
import HeaderMedia from "./HeaderMedia";
import HeaderSearch from "./HeaderSearch";

interface HeaderProps {
  page: string;
}

function Header({ page }: HeaderProps) {
  return (
    <div className="header">
      {page === "search" ? <HeaderSearch /> : ""}
      {page.startsWith("media") ? <HeaderMedia /> : ""}
      <div className="header__left-fake"></div>
      <button className="header__profile" type="button">
        <figure className="header__figure" title="Vadim">
          <div className="header__photo">
            <img
              src="img/avatar.jpg"
              alt="Вадим Скляр"
              className="header__avatar"
            />
          </div>
        </figure>
        <span dir="auto" className="header__username">
          Вадим Скляр
        </span>
        <svg
          role="img"
          height="16"
          width="16"
          className="header__button-down"
          viewBox="0 0 16 16"
        >
          <path d="M14 6l-6 6-6-6h12z"></path>
        </svg>
      </button>
    </div>
  );
}

export default Header;
