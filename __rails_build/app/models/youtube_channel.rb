# == Schema Information
#
# Table name: youtube_channels
#
#  id         :integer          not null, primary key
#  username   :string           not null
#  name       :string
#  thumbnail  :string
#  uploads    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer
#

class YoutubeChannel < ApplicationRecord
  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
end
