class CreateTwitchChannels < ActiveRecord::Migration[5.0]
  def change
    create_table :twitch_channels do |t|
      t.string :name, null: false
      t.string :url, null: false
      t.timestamps
    end

    add_index :twitch_channels, :url, unique: true
  end
end
