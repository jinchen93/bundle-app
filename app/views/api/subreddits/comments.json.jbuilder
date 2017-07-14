json.array! @comments.each do |comment|
  json.partial! "api/subreddits/comment", comment: comment
end