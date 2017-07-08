export const fetchYoutubeFollows = () =>
  $.ajax({
    method: "GET",
    url: "/api/youtube_channels",
  });
