class AddEmbedAndChatUrlToTwitchChannels < ActiveRecord::Migration[5.0]
  def change
    add_column :twitch_channels, :embed_url, :string
    add_column :twitch_channels, :chat_url, :string

  end
end
