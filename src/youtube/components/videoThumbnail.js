import React from 'react';

export default (props) => {
  const video = props.video;
  return (
    <div className="col-md-2 col-sm-4 col-xs-4 videos" key={video.resourceId.videoId}>
      <div className="video">
        <img onClick={ () => props.onSelectVideo(video.position) } 
            className={`thumbnail ${props.active}`} src={video.thumbnails.medium.url} 
            alt="Youtube Clip Thumbnail" />
      </div>
    </div>
  );
};