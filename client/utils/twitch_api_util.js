export const fetchTwitchFollows = () =>
  $.ajax({
    method: "GET",
    url: "/api/twitch_channels",
  });

export const fetchTopStreams = () =>
  $.ajax({
    method: "GET",
    url: "/api/twitch_channels/top_streams",
  });

export const fetchStream = name =>
  $.ajax({
    method: "GET",
    url: `/api/twitch_channels/${name}`,
  });

export const followTwitchChannel = name =>
  $.ajax({
    method: "POST",
    url: "/api/twitch_channel_follows",
    data: { twitch_channel_follow: { name } },
  });

export const removeTwitchChannel = id =>
  $.ajax({
    method: "DELETE",
    url: `/api/twitch_channel_follows/${id}`,
  });
