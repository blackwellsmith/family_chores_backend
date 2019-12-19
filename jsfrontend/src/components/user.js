class User{
    constructor(user) {
        const { id, name, email, chores } = user
        this.id = id
        this.email = email
        this.name = name
        this.chores = chores.map(c => new Chore(c))
    }

    get profileHTML() {
        return (`
        <div>
        <br>
        <h1>Welcome ${this.name}!</h1>
        <br>
        <h2>Looks like you have ${this.chores.length} chores left</h2>
        <ul>
          ${this.chores.map(c => c.liAndLinkHTML).join()}
        </ul>
        
        </div>
        `)
    }
}