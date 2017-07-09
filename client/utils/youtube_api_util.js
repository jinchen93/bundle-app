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
