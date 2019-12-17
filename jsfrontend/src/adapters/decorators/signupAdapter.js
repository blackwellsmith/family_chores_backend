class SignupAdapter{

    constructor(baseAdapter) {
        this.baseAdapter = baseAdapter
        this.baseUrl = this.baseAdapter.baseURL
    }

    get token() {
        return this.baseAdapter.token
    }

    get headers() {
        return this.baseAdapter.headers
    }
}