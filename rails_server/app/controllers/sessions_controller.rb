class SessionsController < ApplicationController
  def create
    user = User.find_by(
      username: params[:user][:username],
      password: params[:user][:password]
    )

    if user.nil?
      render json: { errors: "Invalid username/password login" }, status: 422
    else
      login!(user)
    end
  end

  def destroy
    logout!
  end
end
