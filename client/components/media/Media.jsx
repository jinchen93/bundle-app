import React from "react";
import YoutubeContentContainer from "../youtube/YoutubeContentContainer";
import RedditContentContainer from "../reddit/RedditContentContainer";

const Media = ({ mode, itemId }) => {
  const renderMode = () => {
    if (itemId) {
      switch (mode) {
        case "youtube":
          return <YoutubeContentContainer />;
        case "reddit":
          return <RedditContentContainer />;
        default:
          return <div className="media-content" />;
      }
    } else {
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
