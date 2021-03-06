import React from "react";
import Link from "components/link/Link";
import Styles from "../../style/latestNews/LatestNews.module.scss";
import {useRouter} from "next/router";


const AllNews = (props) => {
    const {allNews} = props;
    const {asPath} = useRouter()

    return (
    <>
      <div className={Styles["latest-news"]}>
        <ul className={`${Styles["latest-news__list"]} row`}>
          {allNews.map(item => {
            return (
              <div key={item._id} className="col-6">
                <li className={Styles["latest-news__item"]}>
                  <Link to={`${asPath}/${item._id}`} className={Styles["latest-news__preview"]}>
                    <img src={item.posterSrc} alt={item.title} />
                  </Link>
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
