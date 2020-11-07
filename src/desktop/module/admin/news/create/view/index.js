import React, {useState} from "react";

import Styles from "../style/news-form.module.scss"
import Link from "app/components/link/Link";
import {useRouter} from "next/router";

const View = (props) => {
  const router = useRouter();

  const [formState, setFormState] = useState(props._id ? props : {
    posterSrc: "",
    title: "",
    description: "",
    shortDescription: "",
    tags: [],
    mainNews: false
  });

  const [bufferTag, setBufferTag] = useState({name:"", href:""});

  const [tags, setTags] = useState(props.tags ? props.tags : []);

  const setPosterSrc = () => (e) => {
    const posterSrc = e.target.value;
    setFormState( formState => ({...formState, posterSrc}) );
  };

  const setTitle = () => (e) => {
    const title = e.target.value;
    setFormState( formState => ({...formState, title}) );
  };

  const setDescription = () => (e) => {
    const description = e.target.value;
    setFormState( formState => ({...formState, description}) );
  };

  const setShortDescription = () => (e) => {
    const shortDescription = e.target.value;
    setFormState( formState => ({...formState, shortDescription}) );
  };

  const setNameTag = () => (e) => {
    const name = e.target.value;
    setBufferTag(bufferTag => ({...bufferTag, name}));
  };
  const setHrefTag = () => (e) => {
    const href = e.target.value;
    setBufferTag(bufferTag => ({...bufferTag, href}));
  };
  const addTagToNews = () => {
    const tagName = tags.find(item => item.name === bufferTag.name);

    if(!Boolean(tagName)) {
      setTags( tags => [...tags, bufferTag]);
      setFormState(formState => (
        {...formState,
          tags: [...tags, bufferTag]
        }
      ));
      setBufferTag({name:"", href:""});
    }
  };

  const deleteTag = (tagName) => {

    const newTags = tags.filter(item => {
      return item.name !== tagName
    });
    setTags(newTags);

    return
  };

  const changeMainNews = (e) => {

    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

    setFormState(formState => (
      {...formState,
        mainNews: value
      }
    ));
  };

  const submitForm = () => async (e) => {
    e.preventDefault();

    const param = formState._id ?
      {
        URL: `http://localhost:5000/admin/${router.query.league}/news/edit/${router.query.edit}`,
        METHOD: "PUT"
      } : {
        URL: "http://localhost:5000/admin/news/create",
        METHOD: "POST"
      };

    formState._id && delete formState._id;

    await fetch(param.URL, {
        method: param.METHOD,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formState)
      }).then(data => data.json()).then(data => {

        /*setFormState({
          posterSrc: "",
          title: "",
          description: "",
          shortDescription: ""
        });*/

      router.push('/admin/champions-league/news/')

      }).catch(err => {
        console.log(err);
      });
  };

  return (
    <div className={Styles["news-form"]}>
      <Link to="/admin/champions-league/news/" className="btn btn_green">Go to news</Link>

      <br />

      <input className={`w-100 ${Styles["form__title"]} ${Styles["form__field"]}`} onChange={setPosterSrc()} type="text" value={formState.posterSrc} placeholder="Введите ссылку на картинку" />

      <br />

      <input className={`w-100 ${Styles["form__title"]} ${Styles["form__field"]}`} onChange={setTitle()} type="text" value={formState.title} placeholder="Заголовок новости" />

      <textarea className={`w-100 ${Styles["form__description "]} ${Styles["form__field"]}`} onChange={setDescription()} type="text" value={formState.description} placeholder="Новость"/>

      <br />

      <textarea className={`w-100 ${Styles["form__description "]} ${Styles["form__field"]}`} onChange={setShortDescription()} type="text" value={formState.shortDescription} placeholder="краткаое описание новости"/>

      <div className="d-flex w-100 justify-content-between">
        <input className={Styles["form__field"]} type="text" onChange={setNameTag()} value={bufferTag.name} placeholder="Название тега"/>

        <br />

        <input className={Styles["form__field"]} type="text" onChange={setHrefTag()} value={bufferTag.href} placeholder="Ссылка на тег новости"/>



        <button className="btn btn_green" onClick={() => addTagToNews()}>Add tag</button>
      </div>
      {/*{formState.errorTags && <p>слепой что ли? уже такой тег есть</p>}*/}

      <br/>

      <div className="d-flex">
        <input id="main-news" type="checkbox" name="main-news" onChange={changeMainNews} checked={formState.mainNews} value={""}/>

        <label htmlFor="main-news">Выбрать новость главной</label>
      </div>

      <br/>

      <ul>
        {tags.map(item => {
          return (
            <li key={item.name}>
              <span data-href={item.href}>{item.name}</span>
              <button onClick={() => deleteTag(item.name)}>x</button>
            </li>
          )
        })}
      </ul>

      <button type="button" onClick={submitForm()} className={`btn btn_blue`}>{formState._id ? "Обновить" : "Создать"}</button>
    </div>
  )
};

export default View;
