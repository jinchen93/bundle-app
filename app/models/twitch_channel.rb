# == Schema Information
#
# Table name: twitch_channels
#
#  id           :integer          not null, primary key
#  name         :string           not null
#  url          :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  thumbnail    :string
#  display_name :string
#

CHANNEL_URL = "https://api.twitch.tv/kraken/channels/"
STREAM_URL = "https://api.twitch.tv/kraken/streams/"
CLIENT_ID = "/?client_id=#{ENV['twitch_api_key']}"
TOP_STREAMS_URL = "https://api.twitch.tv/kraken/streams/?client_id=#{ENV['twitch_api_key']}&limit=9"

class TwitchChannel < ApplicationRecord
  validate :validate_channel
  validates :name, :display_name, :embed_url, :chat_url, :thumbnail,
    uniqueness: true, presence: true

  has_many :twitch_channel_follows
  has_many :users, through: :twitch_channel_follows

  def self.get_top_streams
    streams = HTTParty.get(TOP_STREAMS_URL)["streams"]
    streams.each do |stream|
      channel = TwitchChannel.find_by(name: stream["channel"]["name"])
      TwitchChannel.create({ name: stream["channel"]["name"] }) unless channel
    end
    streams
  end

  def validate_channel
    url = CHANNEL_URL + self.name + CLIENT_ID
    request = HTTParty.get(url)
    if request["status"] == 404
      self.errors[:base] << "Not a valid username"
    else
      process_channel_data(request)
    end
  end

  def process_channel_data(data)
    self.embed_url = "https://player.twitch.tv/?channel=#{self.name}&autoplay=true"
    self.chat_url = "https://twitch.tv/#{self.name}/chat"
    self.display_name = data["display_name"]
    self.thumbnail = data["logo"]
  end

  def get_stream_data
    HTTParty.get(STREAM_URL + self.name + CLIENT_ID)["stream"]
  end

  # Will be called in cron job
  def update_channel
    validate_channel
    self.save
  end

  def get_viewer_count
    url = STREAM_URL + self.name + CLIENT_ID
    request = HTTParty.get(url)
    if request["stream"]
      return request["stream"]["viewers"]
    else
      return nil
    end
  end
end
