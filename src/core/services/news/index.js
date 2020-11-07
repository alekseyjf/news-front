import HttpClient from "app/core/utilites/httpClient";

import Repository from "./repository/Repository";
import News from "./News";

let news = new News({
  dependencies: {
    Repository: new Repository({
      dependencies: {
        HttpClient: HttpClient.getInstance(),
        urls: {
          getMainNews: {
            url: "http://localhost:5000/main-news",
            // domain: "",
            // path: "/api",
            // query: {}
          },
          getLatestNews: {
            url: "http://localhost:5000/get-latest-news/4"
          },
          getAllNews: {
            url: "http://localhost:5000/get-all-news"
          }
        }
      }
    })
  }
});

export default {
  getInstance() {
    return news;
  }
};
