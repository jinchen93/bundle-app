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

class TwitchChannel < ApplicationRecord
  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User
end
