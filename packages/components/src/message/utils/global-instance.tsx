class GlobalMessageInstance {
  private _holder: null = null

  inject = () => {
    return {}
  }
}

const instance = new GlobalMessageInstance()

export default instance
