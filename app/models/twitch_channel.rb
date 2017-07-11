# == Schema Information
#
# Table name: twitch_channels
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  url        :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

STREAM_URL = "https://api.twitch.tv/kraken/streams/"

class TwitchChannel < ApplicationRecord
  validates :name, uniqueness: true, presence: true
  validates :url, presence: true

  has_many :twitch_channel_follows
  has_many :users, through: :twitch_channel_follows

  def validate_channel

  end
end
