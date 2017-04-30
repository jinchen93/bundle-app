# == Schema Information
#
# Table name: twitch_channels
#
#  id             :integer          not null, primary key
#  user_id        :integer          not null
#  username       :string           not null
#  display_name   :string
#  status         :string
#  logo           :string
#  profile_banner :string
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

require 'test_helper'

class TwitchChannelTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
