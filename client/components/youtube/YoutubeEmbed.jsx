import React from "react";
import moment from "moment";
import Linkify from "react-linkify";

const YoutubeEmbed = ({ video, embedId }) =>
  <div className="embed-wrapper">
    <div className="embed-container">
      <iframe
        src={`http://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allowFullScreen
      />
    </div>
    <div className="video-info-container">
      <div className="youtube-video-title">
        {video.title}
      </div>

      <div className="date">
        {moment(video.publishedAt).format("ddd, MMMM Do YYYY, h:mm A")}
      </div>
      <hr />
      <Linkify className="video-description">
        {video.description.split("\n").map((line, idx) =>
          <div key={idx}>
            {line}
          </div>
        )}
      </Linkify>
    </div>
  </div>;

export default YoutubeEmbed;
