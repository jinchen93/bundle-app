import React from 'react';

const YoutubeChannelVid = ({video, videoId}) => {
  const url = `https://www.youtube.com/embed/${videoId}`;
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(video.publishedAt);

  return(
    <div className="container-fluid">

      <div className="row-fluid">
        <div className="col-xs-10 col-xs-offset-1 embed-responsive embed-responsive-16by9">
          <iframe src={url} className="embed-responsive-item"></iframe>
        </div>
      </div>

      <div className="row-fluid descriptionBox">
        <div className="col-xs-10 col-xs-offset-1 well">
          <div>
            <h1>{video.title}</h1>
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