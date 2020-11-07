class CreateNews {
  constructor(props) {

  }

  /**
   * @public
   * @method getInitialProps
   * @return {Promise}
   */
  getInitialProps(props) {
    return Promise.resolve({});
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
  normalizeInitialProps(props) {
    return {
      props
    };
  }
}

export default CreateNews;
