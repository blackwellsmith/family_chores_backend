class ProfilePage extends PageManager{

    constructor(container, adapter) {
        super(container)
        this.adapter = new ProfileAdapter(adapter)
        this.choreAdapter = new ChoreAdapter(adapter)
        this.user = null
    }
  
  
    initBindingsAndEventListeners() {
      return null
    }

    finalBindingsAndEventListeners() {
        this.choresContainer = document.getElementById('chores-container')
        this.form = this.container.querySelector('#chore-form')
        this.choresContainer.addEventListener('click', this.handleChoreDelete.bind(this))
        this.form.addEventListener('submit', this.handleNewChoreSubmit.bind(this))

      
    }

    handleChoreDelete(e) {
        const li = e.target.parentNode
        const choreId = e.target.dataset.id
        console.log(choreId)
        if (e.target.nodeName === "A") { this.choreAdapter.deleteChore(choreId) }
        this.redirect('profile')
    }

    async handleNewChoreSubmit(e) {
        e.preventDefault()
        console.log(e.target)
        const inputs = Array.from(e.target.querySelectorAll('input'))
        const [name, notes] = inputs.map(input => input.value)
        console.log(this.user)
        const params = { chore: { name, notes } }
        console.log(params)
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
        this.finalBindingsAndEventListeners()
    }

    
}