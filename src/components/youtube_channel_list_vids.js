import React from 'react';

const YoutubeChannelListVids = ({video, onVideoSelect}) => {
  const thumbnail = video.snippet.thumbnails.high.url;
  return (
    <div className="col-xs-2">
      <img onClick={ () => onVideoSelect(video, video.snippet.resourceId.videoId) } 
        className="thumbnail" src={thumbnail} alt="Youtube Clip Thumbnail" />
    </div>
  );
};

export default YoutubeChannelListVids;