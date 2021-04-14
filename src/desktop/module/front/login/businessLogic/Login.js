class Login {
  constructor(props) {
    this.AuthService = props.dependencies.AuthService;
  }

  login(dataBody) {
    return new Promise((resolve) => {
      this.AuthService.login(dataBody, (data) => {
        console.log(data);
        // resultContainer.allNews = allNews;

        resolve(data);
      }, resolve);
    });
  }

  /**
   * @public
   * @method getInitialProps
   * @return {Promise}
   */
  getInitialProps(ctx) {
    // const {newsId, league} = ctx.query;

    let result = {
      // url: `http://localhost:5000/admin/${league}/news/edit/${newsId}`,
      // oneNews: []
    };

    return Promise.all([
      // this.getOneNews(result)
    ])
    .then(() => result)
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
    // console.log(initialData, pageInfo);

    return {
      initialData,
      pageInfo
    };
  }
}

export default Login;
