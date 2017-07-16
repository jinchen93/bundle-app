class Api::TwitchChannelFollowsController < ApplicationController
  def create
    name = twitch_channel_follow_params[:name].downcase
    @channel = TwitchChannel.find_by(name: name)
    if @channel
      create_follow
    else
      @channel = TwitchChannel.new(name: name )
      if @channel.save
        create_follow
      else
        render json: ["Invalid username"]
      end
    end
  end

  def create_follow
    follow = TwitchChannelFollow.new({
      twitch_channel_id: @channel.id,
      user_id: current_user.id
    })
    if follow.save
      render :show
    else
      render json: follow.errors.full_messages, status: 422
    end
  end

  def destroy
    follow = TwitchChannelFollow.find_by({
      twitch_channel_id: params[:id],
      user_id: current_user.id
    })
    if follow
      follow.destroy
      render json: follow.twitch_channel_id
    end
  end

  private

  def twitch_channel_follow_params
    params.require(:twitch_channel_follow).permit(:name)
  end
end
