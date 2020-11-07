import _ from "lodash";

class News {
  constructor(props) {
    this.Repository = props.dependencies.Repository;
  }

  /**
   * @public
   * @method getMainNews
   * @param success {Function}
   * @param error {Function}
   * @returns {Repository}
   */
  getMainNews(success, error) {
    if (_.isFunction(success) && _.isFunction(error)) {
      this.Repository.getMainNews(success, error);
    }

    return this;
  }

  /**
   * @public
   * @method getAllNews
   * @param success {Function}
   * @param error {Function}
   * @returns {Repository}
   */
  getAllNews(success, error) {
    if (_.isFunction(success) && _.isFunction(error)) {
      this.Repository.getAllNews(success, error);
    }

    return this;
  }

  getLatestNews(success, error) {
    if (_.isFunction(success) && _.isFunction(error)) {
      this.Repository.getLatestNews(success, error);
    }

    return this;
  }
}

export default News;