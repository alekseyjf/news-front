class Admin {
  constructor(props) {

  }

  /**
   * @public
   * @method getInitialProps
   * @return {Promise}
   */
  getInitialProps(props) {
    // console.log(props);
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
  normalizeInitialProps(initialData, pageInfo) {
    return {
      pageInfo
    };
  }
}

export default Admin;
