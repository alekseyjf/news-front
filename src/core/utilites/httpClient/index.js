import HttpClient from "./HttpClient";

let httpClient = new HttpClient();

export default {
  getInstance() {
    return httpClient;
  }
}