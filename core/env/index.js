import Env from './Env';

const env = new Env();

export default {
  getInstance() {
    return env
  }
}