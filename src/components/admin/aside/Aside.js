import React, {useState} from "react";

import Styles from "./style/Aside.module.scss";

import Link from "../../../components/link/Link";
import classNames from "classnames";



const Aside = () => {
  const [menu, editMenu] = useState([
    {id:"1", name: 'Лига чемпионов', active: true, subTitle: [
        {id: "1", link: "Клубы", to: "/admin/champions-league/clubs"},
        {id: "2", name: "Список бомбардиров"},
        {id: "3", link: "Новости", to: "/admin/champions-league/news"},
      ]},
    {id:"2", name: 'Лига Европы', active: false, subTitle: [
        {id: "1", link: "Клубы", to: "/admin/euro-league/clubs"},
        {id: "2", name: "Список бомбардиров"},
      ]},
    {id:"3", name: 'Премьер лига', active: false, subTitle: [
        {id: "1", link: "Клубы", to: "/admin/premier-league/clubs"},
        {id: "2", name: "Список бомбардиров"},
        {id: "3", name: "Таблица"},
        {id: "4", name: "Результаты тура"},
        {id: "5", name: "Звёзды лиги"},
        {id: "6", link: "Новости", to: "/admin/premier-league/news"}
      ]
    }
  ]);

  const toggleMenu = (depth, id) => (e) => {
    e.stopPropagation();

    if(depth === 0) {
      const newMenu = menu.map(item => {

        if( item.id === id && !item.active ) {
          item.active = true
        } else {
          item.active = false
        }

        return item
      });

      editMenu(newMenu);
    }
  };

  const getMenu = (menu, depth = 0) => {
    return (
      <ul className={Styles.menu}>
        {
          menu.map(item => (
            <li
              key={item.id}
              onClick={toggleMenu(depth, item.id)}
              className={
                classNames(
                  Styles["menu__item"],
                  {[Styles.active]: item.active}
                )
              }>
              {item.name ?
                <p>{item.name}</p> :
                <Link to={item.to}>{item.link}</Link>
              }

              {item.subTitle && getMenu(item.subTitle, depth+1)}
            </li>
          ))
        }
      </ul>
    )
  };

  return (
    <aside className={Styles.aside}>
      {getMenu(menu)}
    </aside>
  )
};


export default Aside;