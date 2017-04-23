class Api::SessionsController < ApplicationController
  def create
    user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if user.nil?
      render json: { errors: "Invalid username/password login" }, status: 422
    else
      login!(user)
      render json: { user: user }
    end
  end

  def destroy
    logout!
  end
end
