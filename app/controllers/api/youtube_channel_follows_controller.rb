class Api::YoutubeChannelFollowsController < ApplicationController
  def create
    channel_name = youtube_channel_follow_params[:name]
    @channel = YoutubeChannel.find_by(name: channel_name)

    # Check to see if channel exists, if not then create it=
    if @channel
      create_follow(@channel)
    else
      @channel = YoutubeChannel.new({ name: channel_name })
      if @channel.save
        create_follow(@channel)
      else
        render json: @channel.errors.full_messages, status: 422
      end
    end
  end

  def create_follow(channel)
    follow = YoutubeChannelFollow.new({
      youtube_channel_id: channel.id,
      user_id: current_user.id
    })
    if follow.save
      render :show
    else
      render json: follow.errors.full_messages, status: 422
    end
  end

  def destroy
    follow = YoutubeChannelFollow.find_by({
      youtube_channel_id: params[:id],
      user_id: current_user.id
    })
    if follow
      follow.destroy
      render json: follow.youtube_channel_id
    end
  end

  private
  def youtube_channel_follow_params
    params.require(:youtube_channel_follow).permit(:name)
  end
end
