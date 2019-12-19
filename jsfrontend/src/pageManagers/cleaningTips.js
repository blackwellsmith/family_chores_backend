class CleaningTipsPage extends PageManager{

    constructor(container, adapter) {
        super(container)
        this.adapter = new CleaningTipsAdapter(adapter)
    }
    
    initBindingsAndEventListeners() { 

    }

    get staticHTML() {
        return (`
        <div>
        <br>
        <h1>Cleaning can feel like a burden, with a few different tips we can knock the dust off of anything!</h1>
        </div>
        `)
    }
}