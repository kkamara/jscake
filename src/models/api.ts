import axios from 'axios'

class API {
  /**
   * HTTP lib for network requests
   * @prop http
   */
  protected http = ''

  /**
   * Base class constructor
   * @param {string=} url - Optional url to override default assignment
   * @param {any=} http - Optional http to override default assignment
   * @return void
   */
  constructor(http = null) {
    this.http = null !== http ? http : axios
  }
}

export default API
