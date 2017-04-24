class Api::SubredditsController < ApplicationController
  def index
    subreddits = current_user.subreddits
    render json: subreddits
  end

  def create
    subreddit = Subreddit.new(subreddit: params[:subreddit])
    subreddit.user_id = current_user.id
    if subreddit.save
      render json: subreddit
    end
  end

  def destroy_all
    current_user.subreddits.destroy_all
  end

  def destroy
    subreddit = Subreddit.find(params[:id])
    subreddit.destroy
    render json: subreddit
  end
end
