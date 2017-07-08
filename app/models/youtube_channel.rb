class YoutubeChannel < ApplicationRecord
  validates :username, :url, presence: true, uniqueness: true

  has_many :youtube_channel_follows
  has_many :users, through: :youtube_channel_follows
end
