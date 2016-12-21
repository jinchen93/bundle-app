import React from 'react';

const YoutubeChannelVid = ({video, videoId}) => {
  const url = `https://www.youtube.com/embed/${videoId}`;
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(video.publishedAt);

  return(
    <div className="row videoContainer">
      <div className="col-md-offset-1 col-md-10 videoPlayerRow">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe src={url} className="embed-responsive-item" allowFullScreen></iframe>
        </div>
      </div>

      <div className="row videoDescription">
        <div className="col-md-8 col-md-offset-2">
          <div className="videoTitle">
            <h2>{video.title}</h2>
          </div>
          <div>
            Posted: {date.toLocaleString('en-US', options)} &nbsp; - &nbsp; {date.toLocaleTimeString('en-US')}
            <hr />
            <p>{video.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YoutubeChannelVid;