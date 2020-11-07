import React, {useState} from "react";
import Link from "../../../../../../components/link/Link";
import Styles from "../style/Main.module.scss";
import {useRouter} from "next/router";

const View = (props) => {
  const [allNews, setAllNews] = useState(props.allNews)

  const router = useRouter();
  const _deleteOneNews = async (id) => {
    await fetch(`http://localhost:5000/admin/${router.query.league}/news/edit/${id}`, {
      method: "DELETE"
    }).then(data => data.json()).then(data => {
      // console.log(data);
      const newListNews = allNews.filter(item => item._id !== id)
      setAllNews(newListNews)
    }).catch(err => {
      console.log(err);
    });
  };

  const addZeroToDate = (date) => {
    // console.log(typeof date);
    return String(date).padStart(2, "0")
  };

  const getNews = () => {
    return (
      <ul className={Styles["posts__list"]}>
        {
          allNews.map((item) => {
            const date = item.dateCreate ? new Date(item.dateCreate) : null;

            return (
              !!item.title && !!item.description &&
                (
                  <li key={item._id} className={`d-flex rounded-20 ${Styles["posts__item"]} ${Styles.news}`}>
                    {item.posterSrc && (
                      <div className={Styles["news__preview"]}>
                        <img src={item.posterSrc} alt={item.title}/>
                      </div>
                    )}
                    <div>
                      <header className={`${Styles["news__header"]} d-flex align-items-center justify-content-between`}>

                        <h2 className={Styles["news__title"]}>{item.title}</h2>
                        {date && (
                          <div>
                            <span>Дата создания - </span>
                            <span>{date.getFullYear()}</span>:
                            <span>{addZeroToDate(date.getMonth() + 1)}</span>:
                            <span>{addZeroToDate(date.getDate())}</span>{" - "}
                            <span>{addZeroToDate(date.getHours())}</span>:
                            <span>{addZeroToDate(date.getMinutes())}</span>
                          </div>
                        )}
                      </header>
                      <div className={Styles["news__body"]}>
                        <span>Краткое описание новости</span>
                        <p className={Styles["news__short-description"]}>{item.shortDescription}</p>

                        <span>Полное описание новости</span>
                        <p className={Styles["news__description"]}>{item.description}</p>

                        {item.tags && (
                          <>
                            <span>Теги новости: </span>
                            {item.tags.map((tag, idx, arr) => {
                              return (
                                <React.Fragment key={tag.name}>
                                  <a className={Styles["news__tag"]} href={tag.href}>{tag.name}</a>
                                  {arr.length - 1 !== idx && ", "}
                                </React.Fragment>
                              )
                            })}
                          </>
                        )}
                        <br />
                        <a href={`/admin/champions-league/news/edit/${item._id}`} className={Styles["news__btn"]}>
                          Edit news
                        </a>
                        <br />
                        <button
                          onClick={() => _deleteOneNews(item._id)}
                          href={`/admin/champions-league/news/edit/${item._id}`}
                          className={Styles["news__btn"]}>
                          Delete news
                        </button>
                        {/*<br />
                        <button
                          onClick={() => leaveComment(item._id)}
                          href={`/admin/champions-league/news/edit/${item._id}`}
                          className={Styles["news__btn"]}>
                          Leave a comment
                        </button>*/}
                      </div>
                    </div>
                  </li>
                )
            )
          })
        }
      </ul>
    )

  };

  return (
    <div>
      <Link to="/admin/champions-league/news/create">Create link</Link>
      <br/>
      <br/>

      {getNews()}
    </div>
  )
};

export default View;
