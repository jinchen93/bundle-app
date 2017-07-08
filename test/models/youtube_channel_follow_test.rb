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

require 'test_helper'

class YoutubeChannelFollowTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
