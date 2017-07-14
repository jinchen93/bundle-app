coder = HTMLEntities.new


json.thread do
  comment = @comments[0]["data"]["children"][0]
  json.partial! "api/subreddits/comment", comment: comment
  json.comments comment["data"]["num_comments"]
  json.domain comment["data"]["domain"]
  json.url comment["data"]["url"]
  json.data comment["data"]
  json.body coder.decode(comment["data"]["selftext_html"])
end

json.comments do
  json.array! @comments[1]["data"]["children"].each do |comment|
    json.partial! "api/subreddits/comment", comment: comment
  end
end