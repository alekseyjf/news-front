import React from "react";


import AuthService from "core/services/auth"
import View from "./view/View";
import Login from "./businessLogic/Login";

// import "./style/Login.module.scss";

let login = new Login({
  dependencies: {
    AuthService: AuthService.getInstance()
  }
});

export default {
  getView(props) {
    return <View {...props} model={login} />;
  },
  /*getInitialProps(...args) {
    return this.getServerSideProps(...args);
  },
  getStaticProps(...args) {
    return this.getInitialProps(...args);
  },*/
  getServerSideProps(...args) {
    return login.getInitialProps(...args);
  },
  normalizeInitialProps(...args) {
    return login.normalizeInitialProps(...args);
  }
};
