class Api::YoutubeChannelsController < ApplicationController
  def index
  end

  def show
  end

  def create
  end

  def destroy
  end

  private

  def youtube_channel_params(params)
    params.require("youtube_channel").permit(:username, :url)
  end
end
