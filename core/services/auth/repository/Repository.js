class Repository {
  constructor(props) {

    this.HttpClient = props.dependencies.HttpClient;
    this.urls = props.dependencies.urls;
  }

  login(
    dataBody,
    success = () => {},
    error = () => {}
  ) {
    this.HttpClient.post(this.urls.login.url, dataBody)
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
}

export default Repository;
