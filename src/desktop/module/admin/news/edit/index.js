import React from "react";

import Admin from "./businessLogic/Admin";
import View from "./view/index";
import "./style/Admin.module.scss";

let admin = new Admin({

});

export default {
  getView(props) {
    return <View {...props} />;
  },
  getInitialProps(...props) {
    return this.getServerSideProps(...props);
  },
  getStaticProps(...props) {
    return this.getInitialProps(...props);
  },
  getServerSideProps(...props) {
    return admin.getInitialProps(...props);
  },
  normalizeInitialProps(...props) {
    return admin.normalizeInitialProps(...props);
  }
};