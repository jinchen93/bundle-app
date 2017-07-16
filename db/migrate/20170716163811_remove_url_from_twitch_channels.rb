class RemoveUrlFromTwitchChannels < ActiveRecord::Migration[5.0]
  def change
    remove_column :twitch_channels, :url
  end
end
