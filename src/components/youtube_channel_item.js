import React from 'react';

const YoutubeChannelItem = ({video, videoId}) => {
  console.log(video);
  const url = `https://www.youtube.com/embed/${videoId}`;

  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const date = new Date(video.publishedAt);
  return(
    <div className="container">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe src={url} className="embed-responsive-item"></iframe>
      </div>

      <div>
        <h1>{video.title}</h1>
      </div>

      <div>
        Posted: {date.toLocaleString('en-US', options)} &nbsp; - &nbsp; {date.toLocaleTimeString('en-US')}
        <hr />
        <p>{video.description}</p>
      </div>
    </div>
  )
}

export default YoutubeChannelItem;