class Chore{
    constructor(chore) {
        const { id, name, notes } = chore
        this.id = id
        this.name = name
        this.notes = notes
    }

    get liAndLinkHTML() {
       return `<li><a href="#" data-id="${this.id}">${this.name}</a> - notes: ${this.notes}</li>` 
    }
}