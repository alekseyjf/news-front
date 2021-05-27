import _ from "lodash";

class Auth {
  constructor(props) {
    this.Repository = props.dependencies.Repository;
  }

  /**
   * @public
   * @method signup
   * @param data {string}
   * @param success {Function}
   * @param error {Function}
   * @returns {Repository}
   */
  signup(data, success, error) {
    if (_.isFunction(success) && _.isFunction(error)) {
      this.Repository.signup(data, success, error);
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

  /**
   * @public
   * @method accessToken
   * @param data {string}
   * @param token
   * @param success {Function}
   * @param error {Function}
   * @returns {Repository}
   */
  accessToken(data, token, success, error) {
    if (_.isFunction(success) && _.isFunction(error)) {
      this.Repository.signin(data, token, success, error);
    }

    return this;
  }

  /**
   * @public
   * @method logout
   * @param data {string}
   * @param token
   * @param success {Function}
   * @param error {Function}
   * @returns {Repository}
   */
  logout(data, token, success, error) {
    if (_.isFunction(success) && _.isFunction(error)) {
      this.Repository.signin(data, token, success, error);
    }

    return this;
  }
}

export default Auth;