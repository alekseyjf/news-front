class AllNews {
  constructor(props) {
    this.NewsService = props.dependencies.NewsService;
  }

  /**
   * @public
   * @method getMainNews
   * @return {Promise}
   */
  /*getMainNews(resultContainer){
    return new Promise((resolve) => {
      this.NewsService.getMainNews((mainNews) => {
        resultContainer.mainNews = mainNews;

        resolve();
      }, resolve);
    });
  }*/

  /**
   * @public
   * @method getMainNews
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
  getInitialProps() {
    let result = {
      // mainNews: {},
      allNews: []
    };

    return Promise.all([
      this.getAllNews(result)
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

export default AllNews;