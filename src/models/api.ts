import axios from 'axios'

class API {
    /** 
     * HTTP lib for network requests 
     * @prop protected _http 
     */
    _http = ''

    /**
     * Base class constructor
     * @param {any=} http - Optional _http to override default assignment
     * @return void
     */
    constructor(http=null) {
        this._http = null !== http ? http : axios
    }
}

export default API
