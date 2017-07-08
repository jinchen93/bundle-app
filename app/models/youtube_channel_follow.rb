class YoutubeChannelFollow < ApplicationRecord
  validates :youtube_channel_id, :user_id, presence: true

  belongs_to :user
  belongs_to :youtube_channel
end
