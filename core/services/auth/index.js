import HttpClient from "core/utilites/httpClient";
import Env from "core/env";

import Repository from "./repository/Repository";
import Auth from "./Auth";

let auth = new Auth({
  dependencies: {
    Repository: new Repository({
      dependencies: {
        HttpClient: HttpClient.getInstance(),
        urls: {
          signup: {
            url: Env.getInstance().getServerHost() + "/signup",
            // domain: "",
            // path: "/api",
            // query: {}
          },
          signin: {
            url: Env.getInstance().getServerHost() + "/signin",
            // domain: "",
            // path: "/api",
            // query: {}
          },
          accessToken: {
            url: Env.getInstance().getServerHost() + "/accessToken",
            // domain: "",
            // path: "/api",
            // query: {}
          },
          logout: {
            url: Env.getInstance().getServerHost() + "/logout",
            // domain: "",
            // path: "/api",
            // query: {}
          }
        }
      }
    })
  }
});

export default {
  getInstance() {
    return auth;
  }
};
