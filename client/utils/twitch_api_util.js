export const fetchTwitchFollows = () =>
  $.ajax({
    method: "GET",
    url: "/api/twitch_channels",
  });

export const removeTwitchChannel = id =>
  $.ajax({
    method: "DELETE",
    url: `/api/twitch_channels/${id}`,
  });

export const fetchTopStreams = () =>
  $.ajax({
    method: "GET",
    url: "/api/twitch_channels/top_streams",
  });
