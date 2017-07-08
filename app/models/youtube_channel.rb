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

class YoutubeChannel < ApplicationRecord
  validates :name, uniqueness: true, presence: true
  validates :url, presence: true

  has_many :youtube_channel_follows
  has_many :users, through: :youtube_channel_follows
end
