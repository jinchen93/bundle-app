# == Schema Information
#
# Table name: twitch_channel_follows
#
#  id                :integer          not null, primary key
#  twitch_channel_id :integer          not null
#  user_id           :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#

class TwitchChannelFollow < ApplicationRecord
  validates :twitch_channel_id, :user_id, presence: true

  belongs_to :user
  belongs_to :twitch_channel
end
