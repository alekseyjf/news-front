import LocalStorage from "./LocalStorage";

let localStorage = new LocalStorage();

export default {
  getInstance() {
    return localStorage;
  }
}