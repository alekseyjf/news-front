import React from "react";
import Styles from "../../style/singleNews/SingleNews.module.scss";
import Link from "components/link/Link";

const SingleNews = (props) => {
    const {oneNews} = props;
    return (
        <div className={`${Styles["main-news"]}`}>
            <div className={Styles["main-news__preview"]}>
                <img style={{width: "100%", background: "#99c", border: "1px solid #000"}} title={oneNews.title}
                     src={oneNews.posterSrc} alt=""/>
            </div>
            <section className={Styles["main-news__section"]}>
                <h2>{oneNews.title}</h2>
                <p>{oneNews.description}</p>
                {oneNews.tags.length && (
                    <div className={`${Styles["main-news__tags"]} ${Styles["tags"]}`}>
                        <ul className={`${Styles["tags__list"]} d-flex`}>
                            {oneNews.tags.map(tag => {
                                return (
                                    <li key={tag.href} className={Styles["tags__item"]}>
                                        <Link to={tag.href}>{tag.name}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                )}
            </section>
        </div>
    )
}

export default SingleNews;
