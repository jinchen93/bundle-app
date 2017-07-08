class Api::YoutubeChannelsController < ApplicationController
  def index
    @channels = current_user.youtube_channels
  end

  def show
  end

  def create
  end

  def destroy
  end

  private

  def youtube_channel_params
    params.require("youtube_channel").permit(:username, :url)
  end
end
