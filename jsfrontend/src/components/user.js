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
        <br>
        <h2>Time for another?</h2>
        <form id="chore">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="name" class="form-control" id="name" placeholder="name" required>
        </div>
        <div class="form-group">
          <label for="notes">Notes</label>
          <input type="notes" class="form-control" id="name" placeholder="name" required>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        <br>
        </div>
        `)
    }
}