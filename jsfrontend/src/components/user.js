class User{
    constructor(user) {
        const { name, email, chores } = user
        this.email = email
        this.name = name
        this.chores = chores.(c => new Chore(c))
    }
}