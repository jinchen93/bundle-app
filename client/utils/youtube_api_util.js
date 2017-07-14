export const fetchYoutubeFollows = () =>
  $.ajax({
    method: "GET",
    url: "/api/youtube_channels",
  });

export const fetchYoutubeVideos = id =>
  $.ajax({
    method: "GET",
    url: `/api/youtube_channels/${id}`,
  });

export const followYoutubeChannel = name =>
  $.ajax({
    method: "POST",
    url: "/api/youtube_channel_follows",
    data: { youtube_channel_follow: { name } },
  });

export const removeYoutubeChannel = id =>
  $.ajax({
    method: "DELETE",
    url: `/api/youtube_channel_follows/${id}`,
  });

export const fetchYoutubeMostPopular = () =>
  $.ajax({
    method: "GET",
    url: "/api/youtube_channels/most_popular",
  });
