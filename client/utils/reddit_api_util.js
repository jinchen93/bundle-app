export const fetchRedditFollows = () =>
  $.ajax({
    method: "GET",
    url: "/api/subreddits",
  });

export const fetchSubredditThreads = id =>
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

export const fetchRedditComments = id =>
  $.ajax({
    method: "GET",
    url: `/api/subreddits/comments/${id}`,
  });

export const fetchAllSubreddit = () =>
  $.ajax({
    method: "GET",
    url: "/api/subreddits/r/all",
  });
