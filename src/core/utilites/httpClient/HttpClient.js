class HttpClient {
  async get(url){
    return await fetch(url)
    .then(res => res.json())
  }
}

export default HttpClient;