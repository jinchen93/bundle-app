import React from 'react';
import '../styles/videoThumbnail.css';

export default (props) => {
  const video = props.video;
  return (
    <div className="col-md-2 col-sm-4 col-xs-4" key={video.resourceId.videoId}>
      <div>
        <img onClick={ () => props.onSelectVideo(video.position) } 
            className={`thumbnail ${props.active}`} src={video.thumbnails.medium.url} 
            alt="Youtube Clip Thumbnail" />
      </div>
    </div>
  );
};