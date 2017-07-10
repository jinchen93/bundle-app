import React from "react";

const Media = ({ videos }) => {
  const renderEmbed = () => {
    if (videos.length) {
      return (
        <div className="embed-container">
          <iframe
            src={`http://www.youtube.com/embed/${videos[0].snippet.resourceId
              .videoId}`}
            frameBorder="0"
            allowFullScreen
          />
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="media-wrapper">
      <div className="media-content">
        {renderEmbed()}
      </div>
    </div>
  );
};

export default Media;
