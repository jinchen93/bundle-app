@channels.each do |channel|
  json.set! channel.id do
    json.idName channel.name
    json.name channel.display_name
    json.extract! channel, :id, :thumbnail
  end
end