import React from 'react';
import moment from 'moment';

export default (props) => {
  const url = `https://www.youtube.com/embed/${props.video.resourceId.videoId}`;
  const date = moment(props.video.publishedAt).format('ddd, MMMM Do YYYY, h:mm A');

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
            <h2>{props.video.title}</h2>
          </div>
          <div>
            Posted on: {date}
            <hr />
            <p>{props.video.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};