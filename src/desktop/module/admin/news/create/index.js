import React from "react";

import CreateNews from "./businessLogic/CreateNews";
import View from "./view/index";

let createNews = new CreateNews({

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
    return createNews.getInitialProps(...props);
  },
  normalizeInitialProps(...props) {
    return createNews.normalizeInitialProps(...props);
  }
};