class CreateTwitchChannels < ActiveRecord::Migration[5.0]
  def change
    create_table :twitch_channels do |t|
      t.integer :user_id, null: false
      t.string :username, null: false
      t.string :display_name
      t.string :status
      t.string :logo
      t.string :profile_banner
      t.timestamps
    end
  end
end
