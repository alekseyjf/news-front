import React from "react";


import AuthService from "core/services/auth"
import View from "./view/View";
import Signup from "./businessLogic/Signup";

// import "./style/Signup.module.scss";

let signup = new Signup({
  dependencies: {
    AuthService: AuthService.getInstance()
  }
});

export default {
  getView(props) {
    return <View {...props} model={signup} />;
  },
  /*getInitialProps(...args) {
    return this.getServerSideProps(...args);
  },
  getStaticProps(...args) {
    return this.getInitialProps(...args);
  },*/
  getServerSideProps(...args) {
    return signup.getInitialProps(...args);
  },
  normalizeInitialProps(...args) {
    return signup.normalizeInitialProps(...args);
  }
};
