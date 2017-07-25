import React from "react";
import NavContainer from "./NavContainer";
import ListingContainer from "../listing/ListingContainer";
import Media from "../media/Media";

class HomePage extends React.Component {
  constructor() {
    super();
    this.fetchContent = this.fetchContent.bind(this);
    this.state = { interval: null };
  }

  componentDidMount() {
    this.fetchContent();
  }

  componentDidUpdate() {
    if (this.props.mode !== twitch && this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
    this.fetchContent();
  }

  fetchContent() {
    const mode = this.props.match.params.mode;
    if (mode === "youtube") {
      this.props.fetchYoutubeFollows();
    } else if (mode === "reddit") {
      this.props.fetchRedditFollows();
    } else if (mode === "twitch") {
      this.props.fetchTwitchFollows();
      this.interval = setInterval(() => {
        this.props.fetchTwitchFollows();
      }, 20000);
    }
  }

  render() {
    const { mode } = this.props.match.params;
    return (
      <div className="home-wrapper">
        <NavContainer />
        <div className="content-wrapper">
          <ListingContainer mode={mode} />
          <Media mode={mode} />
        </div>
      </div>
    );
  }
}

export default HomePage;
