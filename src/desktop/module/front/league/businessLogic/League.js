class League {
  constructor(props) {
    this.NewsService = props.dependencies.NewsService;
  }

  /**
   * @public
   * @method getMainNews
   * @return {Promise}
   */
  getMainNews(resultContainer){
    return new Promise((resolve) => {
      this.NewsService.getMainNews((mainNews) => {
        resultContainer.mainNews = mainNews;

        resolve();
      }, resolve);
    });
  }

  /**
   * @public
   * @method getMainNews
   * @return {Promise}
   */
  getLatestNews(resultContainer){
    return new Promise((resolve) => {
      this.NewsService.getLatestNews((latestNews) => {
        resultContainer.latestNews = latestNews;

        resolve();
      }, resolve);
    });
  }

  /**
   * @public
   * @method getInitialProps
   * @return {Promise}
   */
  getInitialProps() {
    let result = {
      mainNews: {},
      latestNews: []
    };

    return Promise.all([
      this.getMainNews(result),
      this.getLatestNews(result)
    ])
    .then((data) => result)
    .catch(() => result);
  }



  /**
   * @public
   * @method normalizeInitialProps
   * @param initialData {Object}
   * @param pageInfo {Object}
   * @returns {{
   *   pageInfo: Object
   * }}
   */
  normalizeInitialProps(initialData, pageInfo) {
    console.log(initialData, pageInfo);

    return {
      initialData,
      pageInfo
    };
  }
}

export default League;