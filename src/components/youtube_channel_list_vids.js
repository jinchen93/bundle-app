import React from 'react';

const YoutubeChannelListVids = ({video, onVideoSelect}) => {
  const thumbnail = video.snippet.thumbnails.medium.url;
  return (
    <div className="col-sm-2 videos">
      <div className="video">
        <img onClick={ () => onVideoSelect(video, video.snippet.resourceId.videoId) } 
            className="thumbnail" src={thumbnail} alt="Youtube Clip Thumbnail" />
      </div>
    </div>
  );
};

export default YoutubeChannelListVids;