class Repository {
  constructor(props) {

    this.HttpClient = props.dependencies.HttpClient;
    this.urls = props.dependencies.urls;
  }


  /**
   * @public
   * @method getMainNews
   * @return {Promise}
   */

  getMainNews(
    success = () => {},
    error = () => {}
  ) {
    this.HttpClient.get(this.urls.getMainNews.url)
    .then((data) => {
      success(data);
    }, error);
  }

  getLatestNews(
    success = () => {},
    error = () => {}
  ) {
    this.HttpClient.get(this.urls.getLatestNews.url)
    .then((data) => {
      success(data);
    }, error);
  }

  getAllNews(
    success = () => {},
    error = () => {}
  ) {
    this.HttpClient.get(this.urls.getAllNews.url)
    .then((data) => {
      success(data);
    }, error);
  }
}

export default Repository;