class UsersController < ApplicationController
def index
    users = current_user.users 
    render json: users.to_json
end

def show
    user = User.find(params[:id])
    authorize_user_resource(user)
    render_resource(user)
end

def create
    user = User.new(user_params)
    user.owner = current_user 
    user.save
    render_resource(user)
end

def update
    user = User.find(params[:id])
    authorize_user_resource(user)
    user.update(user_params)
    render_resource(user)
end

def destroy
    user = User.find(params[:id])
    authorize_user_resource(user)
    user.destroy
    render_resource(user)
end

private

def user_params
    params.require(:user).permit(:name, :email, :password)
end
end