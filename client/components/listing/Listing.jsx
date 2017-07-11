import React from "react";
import ListingHeader from "./ListingHeader";
import ListingItem from "./ListingItem";
import ListingInformationContainer from "./ListingInformationContainer.js";

class Listing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { deleteMode: false };
    this.handleClick = this.handleClick.bind(this);
    this.toggleDeleteMode = this.toggleDeleteMode.bind(this);
  }

  toggleDeleteMode() {
    this.setState({ deleteMode: !this.state.deleteMode });
  }

  handleClick(e) {
    if (this.state.deleteMode) {
      this.props.removeYoutubeChannel(e.currentTarget.getAttribute("data-id"));
    } else {
      this.props.receiveYoutubeCurrentChannel(
        e.currentTarget.getAttribute("data-id")
      );
    }
  }

  renderMode() {
    switch (this.props.mode) {
      case "YOUTUBE":
        return this.props.youtubeChannels.map(channel =>
          <ListingItem
            deleteMode={this.state.deleteMode}
            handleClick={this.handleClick}
            selected={this.props.currentChannel == channel.id}
            key={channel.id}
            channel={channel}
          />
        );
      case "REDDIT":
        return this.props.subreddits.map(subreddit =>
          <ListingItem
            reddit
            deleteMode={this.state.deleteMode}
            handleClick={this.handleClick}
            selected={this.props.currentSubreddit == subreddit.id}
            key={subreddit.id}
            channel={subreddit}
          />
        );
      default:
        return null;
    }
  }

  render() {
    return (
      <div className="listing-wrapper">
        <div className="listing-content">
          <ListingHeader receiveMode={this.props.receiveMode} />
          <ListingInformationContainer
            deleteMode={this.state.deleteMode}
            toggleDeleteMode={this.toggleDeleteMode}
          />
          {this.renderMode()}
        </div>
      </div>
    );
  }
}

export default Listing;
