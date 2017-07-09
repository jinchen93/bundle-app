class Api::YoutubeChannelsController < ApplicationController
  def index
    @channels = current_user.youtube_channels
  end

  def show
    channel = YoutubeChannel.find_by(id: params[:id])
    if channel
      render json: channel.get_videos
    else
      render json: ["Invalid youtube channel ID"], status: 422
    end
  end

  private

  def youtube_channel_params
    params.require("youtube_channel").permit(:name)
  end
end
