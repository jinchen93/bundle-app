json.extract! @stream, "game", "viewers"

channel = @stream["channel"]
json.extract! channel, "status", "views", "followers", "logo"
if channel["profile_banner"]
  json.banner channel["profile_banner"]
else
  json.banner "http://res.cloudinary.com/jinchen93/image/upload/v1500188306/bg_glitch_pattern_eocwoe.png"
end
json.displayName channel["display_name"]