class SubredditsController < ApplicationController
  def index
    subreddits = Subreddit.all
    render json: subreddits
  end

  def create
    subreddit = Subreddit.new(subreddit_params)

    if subreddit.save
      render json: subreddit
    end
  end

  def destroy_all
    Subreddit.destroy_all
  end

  def destroy
    subreddit = Subreddit.find(params[:id])
    subreddit.destroy
    render json: subreddit
  end

  private

  def subreddit_params
    params.permit(:subreddit)
  end
end
