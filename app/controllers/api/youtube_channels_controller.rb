class Api::YoutubeChannelsController < ApplicationController
  def index
    @channels = current_user.youtube_channels
  end

  def show
    channel = YoutubeChannel.find_by(id: params[:id])
    if channel
      render json: channel.get_videos
    else
      render json: ["Invalid youtube channel"], status: 422
    end
  end

  def most_popular
    videos = YoutubeChannel.get_most_popular
    p "videos"
    if videos
      render json: videos
    else
      render json: ["Something went wrong while fetching the most popular videos"], status: 422
    end
  end

  private

  def youtube_channel_params
    params.require("youtube_channel").permit(:name)
  end
end
