class News {
  constructor(props) {

    this.NewsService = props.dependencies.NewsServices;
  }

  /**
   * @public
   * @method getAllNews
   * @return {Promise}
   */
  getAllNews(resultContainer){
    return new Promise((resolve) => {
      this.NewsService.getAllNews((allNews) => {
        resultContainer.allNews = allNews;

        resolve();
      }, resolve);
    });
  }

  /**
   * @public
   * @method getInitialProps
   * @return {Promise}
   */
  getInitialProps(props) {
    let result = {
      allNews: []
    };
    return Promise.all([
      this.getAllNews(result)
    ])
    .then((data) => result)
    .catch((err) => result)

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
    return {
      pageInfo
    };
  }
}

export default News;
