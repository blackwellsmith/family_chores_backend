class ChoresController < ApplicationController
    before_action :authenticate_user!

    def index
        chores = current_user.chores 
        render json: chores.to_json
    end

    def show
        chore = Chore.find(params[:id])
        authorize_user_resource(chore)
        render_resource(chore)
    end

    def create
        chore = chore.new(chore_params)
        chore.owner = current_user 
        chore.save
        render_resource(chore)
    end

    def update
        chore = Chore.find(params[:id])
        authorize_user_resource(chore)
        chore.update(chore_params)
        render_resource(dog)
    end

    def destroy
        chore = Chore.find(params[:id])
        authorize_user_resource(chore)
        chore.destroy
        render_resource(chore)
    end

    private

    def chore_params
        params.require(:chore).permit(:name, :notes)
    end
end