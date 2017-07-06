class Api::SubredditsController < ApplicationController
  def index
  end

  def show
  end

  def create
  end

  def destroy
  end

  private

  def subreddit_params
    params.require(:subreddit).permit(:name, :url)
  end
end
