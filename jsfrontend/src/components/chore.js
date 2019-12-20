class Chore{
    constructor(chore) {
        const { id, name, notes } = chore
        this.id = id
        this.name = name
        this.notes = notes
    }

    get liAndLinkHTML() {
       return `<li data-id="${this.id}"><a href="#" data-id="${this.id}">${this.name} - notes: ${this.notes}</a></li>` 
        
    }
}