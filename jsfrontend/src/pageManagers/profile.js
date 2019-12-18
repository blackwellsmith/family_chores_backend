class ProfilePage extends PageManager{

    constructor(container, adapter) {
        super(container)
        this.adapter = new ProfileAdapter(adapter)
    }

    initBindingsAndEventListeners() {
        return null
    }
    async fetchAndRenderPageResources() {
        const chores = await this.adapter.getChores()
        this.container.innerHTML = chores.map(c => c.name).join('')
    }
    get staticHTML() {
        return (`
        <h1>You are Legendary!</h1>
        `)
    }

    
}