import React from "react";
import Styles from "./style/Main.module.scss";
import Link from "../link/Link";

const Header = (props) => {
  return (
    <header className={Styles.header}>
      {/*<Link to="/" className="logo">Logo</Link>*/}
      <div className="container">
        <div className="row">
          <div className="col">
              <menu className={`${Styles.menu} d-flex align-items-center justify-content-between`}>
              <ul className={`${Styles["menu__list"]} d-flex align-items-center`}>
                <li className={Styles["menu__item"]}>
                  <Link to={"/"}>Новости</Link>
                </li>
                <li className={Styles["menu__item"]}>
                  <Link to={"/"}>Результаты тура</Link>
                </li>
                <li className={Styles["menu__item"]}>
                  <Link to={"/"}>Таблица</Link>
                </li>
                <li className={Styles["menu__item"]}>
                  <Link to={"/"}>список бомбардиров</Link>
                </li>
              </ul>

              <div className="auth">
                <a href="/login">login</a>
                <a href="/signin">signin</a>
              </div>
            </menu>
          </div>
        </div>
      </div>
    </header>
  )
};

export default Header;
