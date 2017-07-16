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

channels = [
  "techcrunch",
  "caseyneistat",
  "UCO1cgjhGzsSYb1rsB4bFe4Q",
  "UCqr-7GDVTsdNBCeufvERYuw"
]

channels.each do |channel|
  yt = YoutubeChannel.create({ name: channel })
  YoutubeChannelFollow.create({
    youtube_channel_id: yt.id,
    user_id: guest.id
  })
end

subreddits = [
  "bayarea",
  "programming",
  "javascript",
  "askreddit"
]

subreddits.each do |subreddit|
  sr = Subreddit.create({ name: subreddit })
  SubredditFollow.create({
    subreddit_id: sr.id,
    user_id: guest.id
  })
end

twitch_channels = [
  "food",
  "bobross"
]

twitch_channels.each do |channel|
  tw = TwitchChannel.create({ name: channel })
  TwitchChannelFollow.create({
    twitch_channel_id: tw.id,
    user_id: guest.id
  })
end

