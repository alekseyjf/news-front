import React from "react";

import NewsServices from "core/services/news"

import News from "./businessLogic/News";
import View from "./view/View";
import "./style/Main.module.scss";

let news = new News({
  dependencies: {
    NewsServices: NewsServices.getInstance()
  }
});

export default {
  getView(props) {
    return <View {...props} />;
  },
  /*getInitialProps(...props) {
    return this.getServerSideProps(...props);
  },
  getStaticProps(...props) {
    return this.getInitialProps(...props);
  },*/
  getServerSideProps(...props) {
    return news.getInitialProps(...props);
  },
  normalizeInitialProps(...props) {
    return news.normalizeInitialProps(...props);
  }
};
