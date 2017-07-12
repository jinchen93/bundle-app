json.array!(@threads) do |thread|
  data = thread["data"]
  json.extract! data, "id", "permalink", "url", "title", "score", "author", "domain"
  json.comments data["num_comments"]
  json.date data["created_utc"]
  json.self data["is_self"]
  if data["thumbnail"] != "self" && data["thumbnail"] != ""
    json.extract! data, "thumbnail"
  else
    json.thumbnail nil
  end

  permaStartIdx = data["permalink"].index(data["id"]) + data["id"].length + 1
  permaTitle = data["permalink"][permaStartIdx..-1]
  json.permaTitle permaTitle
end