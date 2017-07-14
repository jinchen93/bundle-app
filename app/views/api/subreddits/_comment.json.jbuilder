coder = HTMLEntities.new

json.id comment["data"]["id"]
json.body coder.decode(comment["data"]["body_html"])
json.score comment["data"]["score"]
json.date comment["data"]["created_utc"]
json.author comment["data"]["author"]

if comment["data"]["preview"]
  json.thumbnail comment["data"]["preview"]["images"][0]["source"]["url"]
end

if comment["data"]["title"]
  json.title comment["data"]["title"]
end

if comment["data"]["replies"]
  if comment["data"]["replies"]["data"]
    json.replies comment["data"]["replies"]["data"]["children"].each do |reply|
        json.partial! "api/subreddits/comment", comment: reply
    end
  end
end