class Api::SubredditFollowsController < ApplicationController
  def create
    subreddit_name = get_valid_name(subreddit_follow_params[:name])
    @subreddit = Subreddit.find_by(name: subreddit_name)

    if @subreddit
      create_follow(@subreddit)
    else
      @subreddit = Subreddit.new({ name: subreddit_name })
      if @subreddit.save
        create_follow(@subreddit)
      else
        render json: @subreddit.errors.full_messages, status: 422
      end
    end
  end

  def get_valid_name(name)
    return name[2..-1] if name[0..1] == "r/"
    return name[3..-1] if name[1..2] == "r/"
    name
  end

  def create_follow(subreddit)
    follow = SubredditFollow.new({
      subreddit_id: subreddit.id,
      user_id: current_user.id
    })
    if follow.save
      render :show
    else
      render json: follow.errors.full_messages, status: 422
    end
  end

  def destroy
    follow = SubredditFollow.find_by({
      subreddit_id: params[:id],
      user_id: current_user.id
    })
    if follow
      follow.destroy
      render json: follow.subreddit_id
    end
  end

  private
  def subreddit_follow_params
    params.require(:subreddit_follow).permit(:name)
  end
end
