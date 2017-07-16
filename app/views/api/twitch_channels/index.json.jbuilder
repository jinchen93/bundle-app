@channels.each do |channel|
  json.set! channel.id do
    json.name channel.display_name
    json.extract! channel, :id, :thumbnail
  end
end