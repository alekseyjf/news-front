class HttpClient {
  async get(url) {
    const res = await fetch(url);
    return await res.json();
  }

  async post(url, data, token) {
    console.log(url, data);
    try {
      const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        // credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          Authorization: token ? `Bearer ${token}` : '',
          'Content-Type': 'application/json'
        },
        // redirect: 'follow', // manual, *follow, error
        // referrerPolicy: 'no-referrer', // no-referrer, *client
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
      const data = await response.json();
      console.log(data, data.status);
      // return res.json();
      /*if(res.status === 419) {

      }*/
      return await data;
      /*.catch(err => {
        console.log(err);
        return err
      })*/
    } catch (e) {
      console.log('error', e);
    }

  }
}

export default HttpClient;