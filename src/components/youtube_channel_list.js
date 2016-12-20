import React from 'react';

const YoutubeChannelList = ({video, onVideoSelect}) => {
  const thumbnail = video.snippet.thumbnails.high.url;
  return (
    <div className="col-sm-2">
      <img onClick={ () => onVideoSelect(video, video.snippet.resourceId.videoId) } 
        className="thumbnail" src={thumbnail} />
    </div>
  )
}

export default YoutubeChannelList;