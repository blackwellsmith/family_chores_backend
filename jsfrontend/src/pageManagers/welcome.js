class WelcomePage extends PageManager{

    initBindingsAndEventListeners() {
        this.signupLink = this.container.querySelector('a#signup')
        this.loginLink = this.container.querySelector('a#login')

        this.signupLink.addEventListener('click', handleSignupClick.bind(this))
        this.loginLink.addEventListener('click', handleLoginClick.bind(this))

    }

    get staticHTML() {
        return (`
        <h1>Welcome to The Legendary Chores App!</h1>
        <h3>Please <a href="#" id="signup">Signup</a> or <a href="#" id="login">Login</a></h3>
        `)
   }
}