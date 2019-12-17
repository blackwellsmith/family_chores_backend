class BaseAdapter{
    constructor(baseURL) {
        this.baseURL = baseURL 
        this.token = null
    }

    get headers() {
        const baseHeaders = {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        } 
        if (this.token) {
            baseHeaders = { ...baseHeaders, 'Authorization': `Bearer ${this.token}`}
        }
        return baseHeaders
    }

    checkStatus(res) {
        if (res.status < 200 || res.status > 299) {
            throw new Error(res.status)
        }
    }
}