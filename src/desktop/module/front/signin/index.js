import React from "react";
import LocalStorage from "core/utilites/localStorage";


import AuthService from "core/services/auth"
import View from "./view/View";
import Signin from "./businessLogic/Signin";

// import "./style/Signin.module.scss";

let signin = new Signin({
  dependencies: {
    AuthService: AuthService.getInstance(),
    LocalStorage: LocalStorage.getInstance()
  }
});

export default {
  getView(props) {
    return <View {...props} model={signin} />;
  },
  /*getInitialProps(...args) {
    return this.getServerSideProps(...args);
  },
  getStaticProps(...args) {
    return this.getInitialProps(...args);
  },*/
  getServerSideProps(...args) {
    return signin.getInitialProps(...args);
  },
  normalizeInitialProps(...args) {
    return signin.normalizeInitialProps(...args);
  }
};
