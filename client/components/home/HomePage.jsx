import React from "react";
import NavContainer from "./NavContainer";
import ListingContainer from "../listing/ListingContainer";
import MediaContainer from "../media/MediaContainer.js";

class HomePage extends React.Component {
  constructor() {
    super();
    this.fetchContent = this.fetchContent.bind(this);
  }

  componentDidMount() {
    this.establishMode();
    this.fetchContent();
  }

  componentDidUpdate() {
    this.establishMode();
    this.fetchContent();
  }

  establishMode() {
    const mode = this.props.match.params.mode;
    this.props.receiveMode(mode.toUpperCase());
  }

  fetchContent() {
    const { mode } = this.props;
    if (mode === "YOUTUBE") {
      this.props.fetchYoutubeFollows();
    } else if (mode === "REDDIT") {
      this.props.fetchRedditFollows();
    } else if (mode === "TWITCH") {
      this.props.fetchTwitchFollows();
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
