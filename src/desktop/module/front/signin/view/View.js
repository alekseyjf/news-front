import React, {useState} from "react";
import Header from "components/header/Header";
import DefaultText from 'components/fields/defaultText/DefaultText';

import Style from '../style/Signin.module.scss';

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

  const signin = () => {
    console.log(model);
    model.signin(state).then(data => {
      console.log('data', data);
    });
  };

  return (
    <>
      <Header />
      <div className={`${Style['form-auth']} d-flex flex-column justify-content-center align-items-center`}>
        <div className={`${Style['form-auth__container']} d-flex align-item-center justify-content-center flex-column`}>
          <h2 onClick={() => {console.log(123)}} className={Style['form-auth__title']}>Войти</h2>

          <DefaultText
            value={state.name}
            onChange={changeHandler}
            className={Style['form-auth__field']}
            name='name'
            label='Введите имя'
          />

          <DefaultText
            value={state.email}
            onChange={changeHandler}
            className={Style['form-auth__field']}
            name='email'
            label='Введите почту'
          />

          <DefaultText
            value={state.password}
            onChange={changeHandler}
            className={Style['form-auth__field']}
            name='password'
            type='password'
            label='Введите пароль'
          />

          <button type='button' onClick={signin} className={`${Style['form-auth__submit']} btn btn_md btn_blue`}>Войти</button>
        </div>
      </div>
    </>
  );
};

export default View;
