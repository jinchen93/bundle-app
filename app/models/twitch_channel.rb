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
  validates :name, :display_name, :url, :thumbnail,
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
    self.url = CHANNEL_URL + self.name + CLIENT_ID
    request = HTTParty.get(self.url)
    if request["status"] == 404
      self.errors[:base] << "Not a valid username"
    else
      process_channel_data(request)
    end
  end

  def process_channel_data(data)
    self.display_name = data["display_name"]
    self.thumbnail = data["logo"]
  end

  # Will be called in cron job
  def update_channel
    validate_channel
    self.save
  end
end
