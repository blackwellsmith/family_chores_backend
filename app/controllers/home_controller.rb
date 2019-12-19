class HomeController < ApplicationController
    before_action :authenticate_user!

    def index
      render json: { msg: 'YO'}
    end
        

    def profile
        user = current_user
        render_resource(user, with:[:chores]) 
    end 

end