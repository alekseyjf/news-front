class Env {
  getServerHost() {
    return process.env.NEXT_PUBLIC_SERVER;
  }
}

export default Env