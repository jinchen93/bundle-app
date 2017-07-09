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
