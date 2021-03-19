class OneNews {
  constructor(props) {
    this.NewsService = props.dependencies.NewsService;
  }

  /**
   * @public
   * @method getOneNews
   * @return {Promise}
   */
  getOneNews(resultContainer){
    return new Promise((resolve) => {
      this.NewsService.getOneNews(
      resultContainer.url,
      (oneNews) => {
        resultContainer.oneNews = oneNews;

        resolve();
      }, resolve);
    });
  }

  /**
   * @public
   * @method getInitialProps
   * @return {Promise}
   */
  getInitialProps(ctx) {
    const {newsId, league} = ctx.query;

    let result = {
      url: `http://localhost:5000/admin/${league}/news/edit/${newsId}`,
      oneNews: []
    };

    return Promise.all([
      this.getOneNews(result)
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

export default OneNews;
