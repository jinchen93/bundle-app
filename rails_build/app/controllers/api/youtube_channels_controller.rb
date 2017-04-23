class Api::YoutubeChannelsController < ApplicationController
  def index
    yt_channels = YoutubeChannel.all
    render json: yt_channels
  end

  def create
    new_yt_channel = YoutubeChannel.new(yt_channel_params)

    if new_yt_channel.save
      render json: new_yt_channel
    end
  end

  def destroy_all
    YoutubeChannel.destroy_all
  end

  def destroy
    yt_channel = YoutubeChannel.find(params[:id])
    yt_channel.destroy
    render json: yt_channel
  end

  private

  def yt_channel_params
    params.require(:youtube_channel).permit(:name, :username, :thumbnail, :uploads)
  end
end
