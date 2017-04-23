# == Schema Information
#
# Table name: subreddits
#
#  id         :integer          not null, primary key
#  subreddit  :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer
#

require 'test_helper'

class SubredditTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
