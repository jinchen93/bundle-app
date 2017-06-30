class TwitchChannel < ApplicationRecord
  validates :name, :username, presence: true, uniqueness: true
end
