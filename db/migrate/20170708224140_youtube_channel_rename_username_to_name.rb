class YoutubeChannelRenameUsernameToName < ActiveRecord::Migration[5.0]
  def change
    rename_column :youtube_channels, :username, :name
  end
end
