class ChoresController < ApplicationController
    before_action :authenticate_user!

    def index
        chores = current_user.chores 
        render json: chores.to_json
    end

    def show
        chore = Chore.find(params[:id])
        authorize_owner_resource(dog)
    end
end
