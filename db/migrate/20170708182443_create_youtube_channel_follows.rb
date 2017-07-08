class CreateYoutubeChannelFollows < ActiveRecord::Migration[5.0]
  def change
    create_table :youtube_channel_follows do |t|
      t.integer :youtube_channel_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end

    add_index :youtube_channel_follows, [:youtube_channel_id, :user_id], unique: true
  end
end
