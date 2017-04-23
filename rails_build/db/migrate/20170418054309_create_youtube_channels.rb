class CreateYoutubeChannels < ActiveRecord::Migration[5.0]
  def change
    create_table :youtube_channels do |t|
      t.string :username, null: false
      t.string :name
      t.string :thumbnail
      t.string :uploads
      t.timestamps
    end
  end
end
