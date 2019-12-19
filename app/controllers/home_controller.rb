class HomeController < ApplicationController
    before_action :authenticate_user!

    def index
      render json: { 'YO'}
    end
        

    def profile
        user = current_user
        render_resource(owner, with:[:chores]) 
    end 

end