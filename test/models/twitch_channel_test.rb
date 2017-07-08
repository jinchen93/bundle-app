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

require 'test_helper'

class TwitchChannelTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
