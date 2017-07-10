import React from "react";
import moment from "moment";

const YoutubeVideoListItem = ({ video }) => {
  const date = moment(video.snippet.publishedAt).format("MM/DD/YY");
  const renderDescription = () => {
    let { description } = video.snippet;
    if (description.length > 160) {
      description = description.slice(0, 160) + "...";
    }

    return (
      <div className="video-description">
        {description}
      </div>
    );
  };

  return (
    <div className="youtube-video-list-item">
      <div className="thumbnail-info-wrapper">
        <img src={video.snippet.thumbnails.medium.url} />
        <div className="list-item-info">
          <p>
            {video.snippet.title}
          </p>
          <p className="date">
            Uploaded: {date}
          </p>
        </div>
      </div>
      {renderDescription()}
    </div>
  );
};

export default YoutubeVideoListItem;
