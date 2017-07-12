class Api::SubredditsController < ApplicationController
  def index
    @subreddits = current_user.subreddits
  end

  def show
    subreddit = Subreddit.find_by(id: params[:id])
    if subreddit
      @threads = subreddit.request_subreddit_threads(10)
      render :show
    else
      render json: ["Invalid subreddit"]
    end
  end

  private

  def subreddit_params
    params.require(:subreddit).permit(:name, :url)
  end
end
