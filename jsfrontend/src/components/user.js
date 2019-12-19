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
        <h1>Welcome ${this.name}</h1>
        `)
    }
}