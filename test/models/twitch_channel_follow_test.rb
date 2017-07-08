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

require 'test_helper'

class TwitchChannelFollowTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
