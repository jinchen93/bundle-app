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
  validate :validate_subreddit
  validates :name, uniqueness: true, presence: true
  validates :url, presence: true

  has_many :subreddit_follows
  has_many :users, through: :subreddit_follows

  def validate_subreddit
    self.url = "http://www.reddit.com/r/#{self.name}.json"
    # Check for one thread first to speed up api response
    threads = request_subreddit_threads(1)
    unless threads
      self.errors[:base] << "Not a valid subreddit"
    end
  end

  def request_subreddit_threads(num_threads)
    url = self.url + "?limit=#{num_threads}"
    request = HTTParty.get(url, {
      timeout: 10,
      headers: { "User-Agent" => "BundleMe" }
    })
    request["data"]["children"]
  end

  def self.fetch_comments(id)
    request = HTTParty.get("http://reddit.com/comments/" + id + "/.json", {
      timeout: 10,
      headers: { "User-Agent" => "BundleMe" }
    })
    request
  end
end
