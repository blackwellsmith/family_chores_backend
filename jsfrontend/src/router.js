class Router{
    constructor(kvpairs) {
        this.routes = kvpairs
        this.navbar = this.routes['navbar']
        for (let route in this.routes) {
            this.routes[route].currentPage = () => {
                this.currentPage
            }
        }
    }

    set rootPage(rootPageKey) {
        this.rootPage = this.routes[rootPageKey]
    }

    render(page) {
        this.routes[page].render()
        if (this.navbar) { this.navbar.render() }
        this.currentPage = page
    }

    assignCallback(callback) {
        for (let route in this.routes) {
           this.routes[route].redirect  = callback
        } 
        if(this.navbar){ this.navbar.redirect = callback }
    }

    
}