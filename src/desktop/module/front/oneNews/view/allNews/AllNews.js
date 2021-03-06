import React from "react";
import Link from "components/link/Link";
import Styles from "../../style/latestNews/LatestNews.module.scss";

const AllNews = (props) => {
  const {allNews} = props;
  return (
    <>
      {/*<h2><Link to="/">Все новости</Link></h2>*/}

      <div className={Styles["latest-news"]}>
        <ul className={`${Styles["latest-news__list"]} row`}>
          {allNews.map(item => {
            return (
              <div key={item._id} className="col-6">
                <li className={Styles["latest-news__item"]}>
                  <div className={Styles["latest-news__preview"]}>
                    <img src={item.posterSrc} alt={item.title} />
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.shortDescription}</p>
                </li>
              </div>
            )
          })}
        </ul>
      </div>
    </>
  )
};

export default AllNews;
