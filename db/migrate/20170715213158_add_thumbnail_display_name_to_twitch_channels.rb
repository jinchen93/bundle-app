class AddThumbnailDisplayNameToTwitchChannels < ActiveRecord::Migration[5.0]
  def change
    add_column :twitch_channels, :thumbnail, :string
    add_column :twitch_channels, :display_name, :string
  end
end
