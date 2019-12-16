class HomeController < ApplicationController
  

    def index
        render json: { message: "Are your chore's done?"}
    end
end