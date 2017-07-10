import React from "react";
import NavContainer from "./NavContainer";
import ListingContainer from "../listing/ListingContainer";
import MediaContainer from "../media/MediaContainer.js";

class HomePage extends React.Component {
  componentDidMount() {
    this.props.fetchYoutubeFollows();
    this.props.fetchTwitchFollows();
  }

  componentDidUpdate(prevProps) {
    if (this.props.mode === "YOUTUBE") {
      this.updateYoutube(prevProps);
    }
  }

  updateYoutube(prevProps) {
    const lastYoutubeCurrent = prevProps.youtube.currentChannel;
    const thisYoutubeCurrent = this.props.youtube.currentChannel;

    if (lastYoutubeCurrent !== thisYoutubeCurrent) {
      const currentChannel = this.props.youtube.channels[thisYoutubeCurrent];
      this.props.fetchYoutubeVideos(currentChannel.id);
    }
  }

  render() {
    return (
      <div className="home-wrapper">
        <NavContainer />
        <div className="content-wrapper">
          <ListingContainer />
          <MediaContainer />
        </div>
      </div>
    );
  }
}

export default HomePage;
