class CreateTwitchChannelFollows < ActiveRecord::Migration[5.0]
  def change
    create_table :twitch_channel_follows do |t|
      t.integer :twitch_channel_id, null: false
      t.integer :user_id, null: false
      t.timestamps
    end

    add_index :twitch_channel_follows, [:twitch_channel_id, :user_id], unique: true
  end
end
