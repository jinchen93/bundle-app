@subreddits.each do |subreddit|
  json.set! subreddit.id do
    json.extract! subreddit, :id, :name
  end
end