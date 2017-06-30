class CreateYoutubeChannels < ActiveRecord::Migration[5.0]
  def change
    create_table :youtube_channels do |t|
      t.string :username, null: false
      t.string :url, null: false
      t.timestamps
    end

    add_index :youtube_channels, :url, unique: true
  end
end
