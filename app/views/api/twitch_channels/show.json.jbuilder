json.extract! @stream, "game", "viewers"

stream_channel = @stream["channel"]
json.extract! stream_channel, "status", "views", "followers", "logo"
json.banner stream_channel["profile_banner"]
json.displayName stream_channel["display_name"]
json.embed @channel.embed_url
json.chat @channel.chat_url