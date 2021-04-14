import _ from "lodash";

class Auth {
  constructor(props) {
    this.Repository = props.dependencies.Repository;
  }

  /**
   * @public
   * @method login
   * @param data {string}
   * @param success {Function}
   * @param error {Function}
   * @returns {Repository}
   */
  login(data, success, error) {
    if (_.isFunction(success) && _.isFunction(error)) {
      this.Repository.login(data, success, error);
    }

    return this;
  }

  /**
   * @public
   * @method signin
   * @param data {string}
   * @param success {Function}
   * @param error {Function}
   * @returns {Repository}
   */
  signin(data, success, error) {
    if (_.isFunction(success) && _.isFunction(error)) {
      this.Repository.signin(data, success, error);
    }

    return this;
  }
}

export default Auth;