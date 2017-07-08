# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
YoutubeChannel.destroy_all
YoutubeChannelFollow.destroy_all

guest = User.create({ username: "guest", password: "password" })

yt = YoutubeChannel.create({
  username: "caseyneistat",
  url: "https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails&key=#{ENV['youtube_api_key']}&forUsername=caseyneistat"
})

YoutubeChannelFollow.create({
  youtube_channel_id: yt.id,
  user_id: guest.id
})