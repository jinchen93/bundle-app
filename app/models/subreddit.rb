# == Schema Information
#
# Table name: subreddits
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  url        :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Subreddit < ApplicationRecord
  validates :name, uniqueness: true, presence: true
  validates :url, presence: true

  has_many :subreddit_follows
  has_many :users, through: :subreddit_follows
end
