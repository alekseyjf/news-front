class LocalStorage {
  setItem = (key, value) => {
    if( key, value ) {
      localStorage.setItem(key, value);
      return this;
    }

    return null;
  };

  getItem = (key) => {
    if( key ) {
      return localStorage.getItem(key);
    }

    return null;
  };

  removeItem = (key) => {
    if( key ) {
      localStorage.removeItem(key);
    }

    return this;
  };

  clear = () => {
    localStorage.clear();

    return this;
  }
}

export default LocalStorage;
