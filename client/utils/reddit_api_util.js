export const fetchRedditFollows = () =>
  $.ajax({
    method: "GET",
    url: "/api/subreddits",
  });

export const fetchSubreddit = id =>
  $.ajax({
    method: "GET",
    url: `/api/subreddits/${id}`,
  });

export const followSubreddit = name =>
  $.ajax({
    method: "POST",
    url: "/api/subreddit_follows",
    data: { subreddit_follow: { name } },
  });

export const removeSubreddit = id =>
  $.ajax({
    method: "DELETE",
    url: `/api/subreddit_follows/${id}`,
  });
