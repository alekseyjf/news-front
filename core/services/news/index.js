import HttpClient from "core/utilites/httpClient";
import Env from "core/env";

import Repository from "./repository/Repository";
import News from "./News";

let news = new News({
  dependencies: {
    Repository: new Repository({
      dependencies: {
        HttpClient: HttpClient.getInstance(),
        urls: {
          getMainNews: {
            url: Env.getInstance().getServerHost() + "/main-news",
            // domain: "",
            // path: "/api",
            // query: {}
          },
          getLatestNews: {
            url: Env.getInstance().getServerHost() + "/get-latest-news/4"
          },
          getAllNews: {
            url: Env.getInstance().getServerHost() + "/get-all-news"
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
