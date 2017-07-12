import React from "react";
import YoutubeVideoListItem from "./YoutubeVideoListItem";

const YoutubeVideoList = ({ currentVideo, handleClick, videos }) =>
  <div className="youtube-video-list">
    {videos.map((video, idx) =>
      <YoutubeVideoListItem
        selected={currentVideo == idx}
        idx={idx}
        handleClick={handleClick}
        key={video.id}
        video={video}
      />
    )}
  </div>;

export default YoutubeVideoList;
