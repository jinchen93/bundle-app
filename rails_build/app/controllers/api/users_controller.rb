class Api::UsersController < ApplicationController
  def index
    render json: { username: current_user.username, csrf_token: form_authenticity_token }
  end

  def create
    user = User.new(user_params)
    if user.valid?
      user.save
      render json: { user: user }
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
    params.require(:user).permit(:username, :password)
  end
end
