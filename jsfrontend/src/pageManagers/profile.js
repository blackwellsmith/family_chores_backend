class ProfilePage extends PageManager{

    constructor(container, adapter) {
        super(container)
        this.adapter = new ProfileAdapter(adapter)
        this.user = null
    }

    initBindingsAndEventListeners() {
        return null
    }
    async fetchAndRenderPageResources() {
        try {
            const userObj = await this.adapter.getUser()
            this.user = new User(userObj)
            this.renderOwner()
        } catch (err) {
            this.handleError(err)
        }
    }
    get staticHTML() {
        return (`
        <div class="spin"></div>
        `)
    }

    renderOwner() {
        this.container.innerHTML = this.user.profileHTML
    }

    
}