import React from "react";
import LocalStorage from "core/utilites/localStorage";

import View from "./view/View";
import OneNews from "./businessLogic/OneNews";
import NewsService from "core/services/news";

// import "./style/OneNews.module.scss";

let oneNews = new OneNews({
  dependencies: {
    NewsService: NewsService.getInstance(),
    LocalStorage: LocalStorage.getInstance()
  }
});

export default {
  getView(props) {
    return <View {...props} oneNewsModel={oneNews} />;
  },
  /*getInitialProps(...args) {
    return this.getServerSideProps(...args);
  },
  getStaticProps(...args) {
    return this.getInitialProps(...args);
  },*/
  getServerSideProps(...args) {
    return oneNews.getInitialProps(...args);
  },
  normalizeInitialProps(...args) {
    return oneNews.normalizeInitialProps(...args);
  }
};
