class App{

    constructor() {
        this.adapter = new BaseAdapter()
        this.initBindingsAndEventListeners()
        this.router = new Router({
            'welcome': new WelcomePage(this.pageContainer, this.adapter),
            'login': new LoginPage(this.pageContainer, this.adapter),
            'signup': new SignupPage(this.pageContainer, this.adapter)
        })
        this.router.rootPage = 'welcome'
        this.renderPage('welcome')
        )
    }

    initBindingsAndEventListeners() {
        this.container = document.querySelector('#app-container')
        this.alertsContainer = document.querySelector('#alert-container')
        this.navbarContainer = document.querySelector('#navbar-container')
        this.pageContainer = document.querySelector('#page-container')
    }

    renderPage(page) {
        this.router.render(page)
        
    }

}