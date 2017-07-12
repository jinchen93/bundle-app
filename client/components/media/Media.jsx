import React from "react";
import YoutubeContentContainer from "../youtube/YoutubeContentContainer";
import RedditContentContainer from "../reddit/RedditContentContainer";

const Media = ({ mode }) => {
  const renderMode = () => {
    switch (mode) {
      case "YOUTUBE":
        return <YoutubeContentContainer />;
      case "REDDIT":
        return <RedditContentContainer />;
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
