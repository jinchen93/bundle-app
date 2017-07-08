# == Schema Information
#
# Table name: youtube_channels
#
#  id         :integer          not null, primary key
#  username   :string           not null
#  url        :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class YoutubeChannelTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
