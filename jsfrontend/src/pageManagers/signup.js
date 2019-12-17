class SignupPage extends PageManager{

    initBindingsAndEventListeners() {
      this.form = this.container.querySelector('#signup-form')
      
      this.form.addEventListener('submit', this.handleSubmit.bind(this))
    }
  
  handleSubmit(e) {
    e.preventDefault()
    const inputs = Array.from(e.target.querySelectorAll('input'))
    //const name = inputs[0].value
    //const email = inputs[1].value
    //const password = inputs[2].value
    const [name, email, password] = inputs.map(input => input.value)
    console.log(name, email, password)
  }
    

    get staticHTML() {
        return (`
        <h2>Sign Up</h2>
        <form id="signup-form">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="name" class="form-control" id="name" placeholder="Name" required>
        </div>
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required>
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" placeholder="Password" required>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        `)
    }

    
}