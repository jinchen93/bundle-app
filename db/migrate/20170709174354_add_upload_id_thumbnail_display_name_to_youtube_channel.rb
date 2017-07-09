class AddUploadIdThumbnailDisplayNameToYoutubeChannel < ActiveRecord::Migration[5.0]
  def change
    add_column :youtube_channels, :upload_id, :string
    add_column :youtube_channels, :thumbnail, :string
    add_column :youtube_channels, :display_name, :string
  end
end
