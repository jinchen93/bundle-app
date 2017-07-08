# == Schema Information
#
# Table name: youtube_channel_follows
#
#  id                 :integer          not null, primary key
#  youtube_channel_id :integer          not null
#  user_id            :integer          not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class YoutubeChannelFollow < ApplicationRecord
  validates :youtube_channel_id, :user_id, presence: true

  belongs_to :user
  belongs_to :youtube_channel
end
