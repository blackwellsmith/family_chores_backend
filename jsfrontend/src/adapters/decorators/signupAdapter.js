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

    

    async signup() {
        const res = fetch(`${this.baseURL}/signup`, {
            method: "POST",
            headers: this.headers,
            body: JSON.stringify(params)
        })
        this.baseAdapter.checkStatus(res)
        this.baseAdapter.token = res.headers.get('authorization').split(' ')[1]
    }
}