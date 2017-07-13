import React from "react";
import NavContainer from "./NavContainer";
import ListingContainer from "../listing/ListingContainer";
import Media from "../media/Media";

class HomePage extends React.Component {
  constructor() {
    super();
    this.fetchContent = this.fetchContent.bind(this);
  }

  componentDidMount() {
    this.fetchContent();
  }

  componentDidUpdate() {
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
    }
  }

  render() {
    const { mode, id } = this.props.match.params;
    return (
      <div className="home-wrapper">
        <NavContainer />
        <div className="content-wrapper">
          <ListingContainer mode={mode} />
          <Media itemId={id} mode={mode} />
        </div>
      </div>
    );
  }
}

export default HomePage;
