coder = HTMLEntities.new

json.id comment["data"]["id"]
json.body coder.decode(comment["data"]["body_html"])
json.score comment["data"]["score"]
json.date comment["data"]["created_utc"]
json.author comment["data"]["author"]

if comment["data"]["replies"]
  if comment["data"]["replies"]["data"]
    json.replies comment["data"]["replies"]["data"]["children"].each do |reply|
        json.partial! "api/subreddits/comment", comment: reply
    end
  end
end