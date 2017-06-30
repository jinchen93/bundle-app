class YoutubeChannel < ApplicationRecord
  validates :username, :url, presence: true, uniqueness: true
end
