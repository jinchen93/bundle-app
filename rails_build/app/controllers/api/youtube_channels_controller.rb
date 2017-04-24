class Api::YoutubeChannelsController < ApplicationController
  def index
    yt_channels = current_user.youtube_channels
    render json: yt_channels
  end

  def create
    new_yt_channel = YoutubeChannel.new(yt_channel_params)
    new_yt_channel.user_id = current_user.id

    if new_yt_channel.save
      render json: new_yt_channel
    end
  end

  def destroy_all
    current_user.youtube_channels.destroy_all
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
