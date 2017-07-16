import React from "react";
import YoutubeContentContainer from "../youtube/YoutubeContentContainer";
import RedditContent from "../reddit/RedditContent";
import TwitchContent from "../twitch/TwitchContent";

const Media = ({ mode }) => {
  const renderMode = () => {
    switch (mode) {
      case "youtube":
        return <YoutubeContentContainer />;
      case "reddit":
        return <RedditContent />;
      case "twitch":
        return <TwitchContent />;
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
