json.array! @streams.each do |stream|
  json.extract! stream, "game", "viewers"
  json.name stream["channel"]["name"]
  json.displayName stream["channel"]["display_name"]
  json.status stream["channel"]["status"]
  json.thumbnail stream["preview"]["medium"]
end