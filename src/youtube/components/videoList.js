import React from 'react';

export default (props) => {
  return (
    <div className="row">
      <div className="col-md-1"></div>
      {
        props.channelVideos.map( video => { 
          return( 
            <div className="col-md-2 col-sm-4 col-xs-4 videos" key={video.resourceId.videoId}>
              <div className="video">
                <img onClick={ () => props.onSelectVideo(video.position) } 
                    className="thumbnail" src={video.thumbnails.medium.url} 
                    alt="Youtube Clip Thumbnail" />
              </div>
            </div>
          )
        })
      }
    </div>
  );
};