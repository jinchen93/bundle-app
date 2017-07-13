json.array! @comments.each do |comment|
  json.partial! "api/subreddits/comment", comment: comment
end

# @comments.each_with_index do |comment, idx|
#   json.set! idx, comment
# end