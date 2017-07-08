# == Schema Information
#
# Table name: subreddit_follows
#
#  id           :integer          not null, primary key
#  subreddit_id :integer          not null
#  user_id      :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class SubredditFollow < ApplicationRecord
  validates :subreddit_id, :user_id, presence: true

  belongs_to :user
  belongs_to :subreddit
end
