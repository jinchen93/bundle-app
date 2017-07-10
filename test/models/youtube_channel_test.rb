# == Schema Information
#
# Table name: youtube_channels
#
#  id           :integer          not null, primary key
#  name         :string           not null
#  url          :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  upload_id    :string
#  thumbnail    :string
#  display_name :string
#

require 'test_helper'

class YoutubeChannelTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
