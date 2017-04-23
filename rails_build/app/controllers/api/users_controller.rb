class Api::UsersController < ApplicationController
  def index
    if logged_in?
      render json: { username: current_user.username, csrf_token: form_authenticity_token }
    else
      render json: { username: 'guest', csrf_token: form_authenticity_token }
    end
  end

  def create
    user = User.new(user_params)

    if user.valid?
      user.save
      render json: user
    else
      render json: { errors: user.errors.full_messages }, status: 422
    end
  end

  def update
    # TODO: Write update method
  end

  def destroy
    # TODO: Write destroy method
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :session_token)
  end
end
