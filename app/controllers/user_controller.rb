class UserController < ApplicationController
    def index
        @users = User.all
        render json: @todos
    end
end
