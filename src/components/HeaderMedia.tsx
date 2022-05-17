import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class HeaderMedia extends Component {
  render() {
    return (
      <div className="header__media">
        <NavLink
          to="/media"
          className={({ isActive }) =>
            isActive ? "header__item header__item-active" : "header__item"
          }
        >
          Исполнители
        </NavLink>
        <NavLink
          to="/album"
          className={({ isActive }) =>
            isActive ? "header__item header__item-active" : "header__item"
          }
        >
          Альбомы
        </NavLink>
      </div>
    );
  }
}
