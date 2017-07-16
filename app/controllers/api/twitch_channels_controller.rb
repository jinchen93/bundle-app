class Api::TwitchChannelsController < ApplicationController
  def index
    @channels = current_user.twitch_channels
  end

  def show
    @channel = TwitchChannel.find_by({ name: params[:name] })
    if @channel
      render :show
    else
      render json: ["Cannot find that channel"], status: 422
    end
  end

  def top_streams
    @streams = TwitchChannel.get_top_streams
    render "/api/twitch_channels/top_streams"
  end

  private

  def twitch_channel_params
    params.require(:twitch_channel).permit(:name)
  end
end
