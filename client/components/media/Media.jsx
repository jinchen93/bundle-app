import React from "react";
import YoutubeVideoList from "./YoutubeVideoList";

const Media = ({ videos }) => {
  const renderEmbed = () => {
    if (videos.length) {
      return (
        <div className="embed-wrapper">
          <div className="embed-container">
            <iframe
              src={`http://www.youtube.com/embed/${videos[0].snippet.resourceId
                .videoId}`}
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      );
    } else {
      return null;
    }
  };

  const renderVideoList = () => {
    if (videos.length) {
      return <YoutubeVideoList videos={videos} />;
    } else {
      return null;
    }
  };

  return (
    <div className="media-wrapper">
      <div className="media-content">
        {renderEmbed()}
        {renderVideoList()}
      </div>
    </div>
  );
};

export default Media;
