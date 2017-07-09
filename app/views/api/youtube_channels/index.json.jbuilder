@channels.each do |channel|
  json.set! channel.id do
    json.extract! channel, :id, :thumbnail
    json.name channel.display_name
  end
end
