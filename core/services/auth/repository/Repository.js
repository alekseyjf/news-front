class Repository {
  constructor(props) {

    this.HttpClient = props.dependencies.HttpClient;
    this.urls = props.dependencies.urls;
  }

  signup(
    dataBody,
    success = () => {},
    error = () => {}
  ) {
    this.HttpClient.post(this.urls.signup.url, dataBody)
    .then((data) => {
      success(data);
    }, error);
  }

  signin(
    dataBody,
    success = () => {},
    error = () => {}
  ) {
    this.HttpClient.post(this.urls.signin.url, dataBody)
    .then((data) => {
      success(data);
    }, error);
  }

  accessToken(
    dataBody,
    token,
    success = () => {},
    error = () => {}
  ) {
    this.HttpClient.post(this.urls.accessToken.url, dataBody, token)
    .then((data) => {
      success(data);
    }, error);
  }

  logout(
    dataBody,
    token,
    success = () => {},
    error = () => {}
  ) {
    this.HttpClient.post(this.urls.logout.url, dataBody, token)
    .then((data) => {
      success(data);
    }, error);
  }
}

export default Repository;
