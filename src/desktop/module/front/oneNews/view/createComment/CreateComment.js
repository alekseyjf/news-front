import React, {useEffect, useState} from "react";
import Styles from "../../style/createComment/CreateComment.module.scss";
import {useRouter} from "next/router";

import Numbers from "app/core/utilites/Numbers"

const CreateComment = (props) => {
    const numbers = Numbers.getInstance();
    const {comments: propComments} = props;
    const [singleComm, setSingleComm] = useState('');
    const [comments, setComments] = useState(propComments || [])
    const {newsId} = useRouter().query;

    console.log(comments);

    const changeComment = (e) => {
        e.persist()
        setSingleComm(e.target.value);
    }

    const createComment = async () => {
        await fetch("http://localhost:5000/create-comment", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(
                {
                    newsId,
                    comment: {
                        text: singleComm.trim()
                    },
                    comments

                })
        })
            .then(data => data.json())
            .then(data => {
                setComments(data);
                setSingleComm('');
            }).catch(err => err);
    }

    const renderCommetns = () => {
        return (
            <ul className={Styles['comments__list']}>
                {comments.map((item) => {
                    const date = item.dateCreate ? new Date(item.dateCreate) : null;
                    return (
                        <li key={item.dateCreate} className={`${Styles["comments__item"]} ${Styles["comment"]}`}>
                            <header className={`${Styles['comment__header']} d-flex justify-content-between`}>
                                <div className={Styles['comment__name']}>
                                    Имя Фамилия
                                </div>
                                <div className={Styles['comment__date']}>
                                    {
                                        date && (
                                            <div>
                                                <span>Опубликова - </span>
                                                <span>{date.getFullYear()}</span>:
                                                <span>{numbers.addLeadingZero(date.getMonth() + 1)}</span>:
                                                <span>{numbers.addLeadingZero(date.getDate())}</span>{" - "}
                                                <span>{numbers.addLeadingZero(date.getHours())}</span>:
                                                <span>{numbers.addLeadingZero(date.getMinutes())}</span>
                                            </div>
                                        )}
                                </div>
                            </header>
                            <div className={Styles['comment__body']}>
                                <p className={Styles.comment__text}>
                                    {item.text}
                                </p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }

    return (
        <>
            <div className={Styles['comments']}>
                { Boolean(comments.length) && renderCommetns() }
            </div>
            <div className={Styles['comment-form']}>


                <textarea
                    onChange={changeComment}
                    value={singleComm}
                    className={Styles['comment-form__field']}
                    name="comment"
                    id="comment"
                    placeholder="write some comment"
                />
                <button
                    onClick={createComment}
                    className={Styles['comment-form__btn']}
                >Оставить комментарий</button>
            </div>
        </>
    )
}

export default CreateComment;
