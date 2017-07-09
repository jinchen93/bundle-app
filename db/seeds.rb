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
Subreddit.destroy_all
SubredditFollow.destroy_all
TwitchChannel.destroy_all
TwitchChannelFollow.destroy_all

guest = User.create({ username: "guest", password: "password" })

yt = YoutubeChannel.create({
  name: "caseyneistat",
})

sr = Subreddit.create({
  name: "javascript",
  url: "https://www.reddit.com/r/javascript/.json"
})

tw = TwitchChannel.create({
  name: "food",
  url: "http://player.twitch.tv/?channel=food&autoplay=true"
})

YoutubeChannelFollow.create({
  youtube_channel_id: yt.id,
  user_id: guest.id
})

SubredditFollow.create({
  subreddit_id: sr.id,
  user_id: guest.id
})

TwitchChannelFollow.create({
  twitch_channel_id: tw.id,
  user_id: guest.id
})