import React from "react";
import View from "./view/View";
import League from "./businessLogic/AllNews";
import NewsService from "core/services/news";

import "./style/Legue.module.scss";

let league = new League({
  dependencies: {
    NewsService: NewsService.getInstance()
  }
});

export default {
  getView(props) {
    return <View {...props} />;
  },
  /*getInitialProps(...args) {
    return this.getServerSideProps(...args);
  },
  getStaticProps(...args) {
    return this.getInitialProps(...args);
  },*/
  getServerSideProps(...args) {
    return league.getInitialProps(...args);
  },
  normalizeInitialProps(...args) {
    return league.normalizeInitialProps(...args);
  }
};