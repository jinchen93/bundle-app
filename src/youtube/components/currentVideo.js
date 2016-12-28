import React from 'react';
import moment from 'moment';

const CurrentVideo = ({video, videoId}) => {
  const url = `https://www.youtube.com/embed/${videoId}`;
  const date = moment(video.publishedAt).format('ddd, MMMM Do YYYY, h:mm A');

  return(
    <div className="row videoContainer">
      <div className="col-md-offset-2 col-md-8 videoPlayerRow">
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
            Posted on: {date}
            <hr />
            <p>{video.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentVideo;