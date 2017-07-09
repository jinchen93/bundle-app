export const fetchTwitchFollows = () =>
  $.ajax({
    method: "GET",
    url: "/api/twitch_channels",
  });
