class Api::TwitchChannelsController < ApplicationController
  def index
    twitch_channels = current_user.twitch_channels
    render json: twitch_channels
  end

  def create
    new_twitch_channel = TwitchChannel.new(twitch_channel_params)
    new_twitch_channel.user_id = current_user.id

    if new_twitch_channel.save
      render json: new_twitch_channel
    end
  end

  def destroy_all
    current_user.twitch_channels.destroy_all
  end

  def destroy
    twitch_channel = TwitchChannel.find(params[:id])
    twitch_channel.destroy
    render json: twitch_channel
  end

  private

  def twitch_channel_params
    params.require(:twitch_channel).permit(
      :username, :display_name, :status, :logo, :profile_banner
    )
  end

end
