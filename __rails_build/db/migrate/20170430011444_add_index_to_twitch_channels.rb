class AddIndexToTwitchChannels < ActiveRecord::Migration[5.0]
  def change
    add_index :twitch_channels, :user_id
    add_index :twitch_channels, :username
  end
end
