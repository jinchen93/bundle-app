import React from "react";
import YoutubeVideoListItem from "./YoutubeVideoListItem";

const YoutubeVideoList = ({ videos }) =>
  <div className="youtube-video-list">
    {videos.map(video => <YoutubeVideoListItem key={video.id} video={video} />)}
  </div>;

export default YoutubeVideoList;
