import React from "react";
import Styles from "../../style/mainNews/MainNews.module.scss";
import Link from "components/link/Link";

const MainNews = (props) => {
  const {mainNews} = props;
  return (
    <div className={`${Styles["main-news"]} d-flex`}>
      <div className={Styles["main-news__preview"]}>
        <img style={{width: "100%", background: "#99c", border: "1px solid #000"}} title={mainNews.title} src={mainNews.posterSrc} alt=""/>
      </div>
      <section className={Styles["main-news__section"]}>
        <h2>{mainNews.title}</h2>
        <p>{mainNews.shortDescription}</p>
        {mainNews.tags.length && (
          <div className={`${Styles["main-news__tags"]} ${Styles["tags"]}`}>
            <ul className={`${Styles["tags__list"]} d-flex`}>
              {mainNews.tags.map(tag => {
                return (
                  <li key={tag.href} className={Styles["tags__item"]}>
                    <Link to={tag.href}>{tag.name}</Link>
                  </li>
                )
              })}
            </ul>
          </div>
        ) }
      </section>
    </div>
  )
}

export default MainNews;