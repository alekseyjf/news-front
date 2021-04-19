import React, {useState} from "react";
import Header from "components/header/Header";
import DefaultText from 'components/fields/defaultText/DefaultText';

import Style from '../style/Login.module.scss';

const View = ({model}) => {
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
  });

  const changeHandler = (e) => {
    e.persist();
    setState(oldState => ({...oldState, [e.target.name]: e.target.value}));
  };

  const login = () => {
    console.log(model);
    window.model = model;
    model.login(state).then(data => {
      console.log('data', data);
    });
  };

  return (
    <>
      <Header />
      <div className={`${Style['form-auth']} d-flex flex-column justify-content-center align-items-center`}>
        <div className={`${Style['form-auth__container']} d-flex align-item-center justify-content-center flex-column`}>
          <h2 onClick={(e) => {e.persist(); console.log(123)}} className={Style['form-auth__title']}>Авторизоваться</h2>

          <DefaultText
            value={state.name}
            onChange={changeHandler}
            className={Style['form-auth__field']}
            name='name'
            label='Введите имя'
            required={true}
          />

          <DefaultText
            value={state.email}
            onChange={changeHandler}
            className={Style['form-auth__field']}
            name='email'
            label='Введите почту'
            required={true}
            type={'email'}
          />

          <DefaultText
            value={state.password}
            onChange={changeHandler}
            className={Style['form-auth__field']}
            name='password'
            type='password'
            label='Введите пароль'
            required={true}
          />

          <button type='button' onClick={login} className={`${Style['form-auth__submit']} btn btn_md btn_blue`}>Войти</button>
        </div>
      </div>
    </>
  );
};

export default View;
