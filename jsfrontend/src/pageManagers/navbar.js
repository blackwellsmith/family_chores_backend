class Navbar extends PageManager{
    constructor(container, adapter) {
        super(container)
        this.adapter = new ProfileAdapter(adapter)
    }

    

    get is_authenticated() {
        return !!this.adapter.token
    }
}