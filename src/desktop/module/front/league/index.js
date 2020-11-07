import React from "react";

import NewsService from "app/core/services/news";

import View from "./view/View";
import League from "./businessLogic/League";

import "./style/Legue.module.scss";

let league = new League({
  dependencies: {
    NewsService: NewsService.getInstance()
  }
});

/*export default {
  getView(props) {
    return <Footer {...props}/>
  }
}*/

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