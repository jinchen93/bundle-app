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

  def comments
    @comments = Subreddit.fetch_comments(params[:id])
    render :comments
  end

  def r_all
    @threads = Subreddit.fetch_all
    if @threads
      render :show
    else
      render json: ["An error occurred while fetching /r/all"]
    end
  end

  private

  def subreddit_params
    params.require(:subreddit).permit(:name, :url)
  end
end
