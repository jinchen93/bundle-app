import React from "react";
import YoutubeContentContainer from "../youtube/YoutubeContentContainer";
import RedditContent from "../reddit/RedditContent";

const Media = ({ mode, itemId }) => {
  const renderMode = () => {
    switch (mode) {
      case "youtube":
        return <YoutubeContentContainer />;
      case "reddit":
        return <RedditContent />;
      default:
        return <div className="media-content" />;
    }
  };

  return (
    <div className="media-wrapper">
      {renderMode()}
    </div>
  );
};

export default Media;
