class Alert{

    constructor(container) {
        this.container = container
    }

    stopAlert() {
        this.clearTimeout(this.timeout)
    }

    render(msg, type) {
        const html = ` 
        <div class="alert alert-${type}" role="alert">
          ${msg}
        </div>`

        this.timeout = setTimeout(() => {
            this.container.innerHTML = html
        }, 5000)
    }

}