class WelcomePage extends PageManager{
    get staticHTML() {
        return (`
        <h1>Welcome to The Legendary Chores App!</h1>
        <h3>Please<a id="signup">Signup</a> or <a id="login">Login</a></h3>
        `)
   }
}