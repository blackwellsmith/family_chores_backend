class ProfilePage extends PageManager{

    constructor(container, adapter) {
        super(container)
        this.adapter = new ProfileAdapter(adapter)
        this.choreAdapter = new ChoreAdapter(adapter)
        this.user = null
    }

    initBindingsAndEventListeners() {
        this.form = this.container.querySelector('#chore')
        
        this.form.addEventListener('submit', this.handleSubmit.bind(this))
      }
    
    async handleSubmit(e) {
      e.preventDefault()
      const inputs = Array.from(e.target.querySelectorAll('input'))
      const [name, notes] = inputs.map(input => input.value)
      
      const params = {
        user: {
          name, notes
        }
      }
      try {
        await this.choreAdapter.newChore(params)
        this.redirect('profile')
      } catch(err){
        //this.handleAlert(err, 'Danger')
        this.handleError(err)
      }
    }
    async fetchAndRenderPageResources() {
        try {
            const userObj = await this.adapter.getUser()
            this.user = new User(userObj)
            this.renderOwner()
        } catch (err) {
            this.handleError(err)
        }
    }
    get staticHTML() {
        return (`
        <div class="loader"></div>
        `)
    }

    renderOwner() {
        this.container.innerHTML = this.user.profileHTML
        //finalBindingsAndEventListeners()
    }

    
}