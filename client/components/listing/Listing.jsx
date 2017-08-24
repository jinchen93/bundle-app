import React from "react";
import ListingHeader from "./ListingHeader";
import ListingItem from "./ListingItem";
import ListingInformationContainer from "./ListingInformationContainer.js";

class Listing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { deleteMode: false };
    this.deleteConfirmation = this.deleteConfirmation.bind(this);
    this.handleYoutubeClick = this.handleYoutubeClick.bind(this);
    this.handleRedditClick = this.handleRedditClick.bind(this);
    this.handleTwitchClick = this.handleTwitchClick.bind(this);
    this.toggleDeleteMode = this.toggleDeleteMode.bind(this);
  }

  toggleDeleteMode() {
    this.setState({ deleteMode: !this.state.deleteMode });
  }

  deleteConfirmation(e) {
    if (this.state.deleteMode) {
      e.preventDefault();
      const name = e.currentTarget.getAttribute("data-name");
      return window.confirm(`Are you sure you want to delete ${name}?`)
    }
  }

  handleYoutubeClick(e) {
    const confirmClick = this.deleteConfirmation(e);
    if (confirmClick) {
      const id = e.currentTarget.getAttribute("data-id");
      this.props.removeYoutubeChannel(id);
    }
  }

  handleRedditClick(e) {
    const confirmClick = this.deleteConfirmation(e);
    if (confirmClick) {
      const id = e.currentTarget.getAttribute("data-id");
      this.props.removeSubreddit(id);
    }
  }

  handleTwitchClick(e) {
    const confirmClick = this.deleteConfirmation(e);
    if (confirmClick) {
      const id = e.currentTarget.getAttribute("data-id");
      this.props.removeTwitchChannel(id);
    }
  }

  renderMode() {
    switch (this.props.mode) {
      case "youtube":
        return this.props.youtubeChannels.map(channel =>
          <ListingItem
            mode={this.props.mode}
            deleteMode={this.state.deleteMode}
            handleClick={this.handleYoutubeClick}
            selected={this.props.match.params.id == channel.id}
            key={channel.id}
            channel={channel}
          />
        );
      case "reddit":
        return this.props.subreddits.map(subreddit =>
          <ListingItem
            reddit
            mode={this.props.mode}
            deleteMode={this.state.deleteMode}
            handleClick={this.handleRedditClick}
            selected={this.props.match.params.id == subreddit.id}
            key={subreddit.id}
            channel={subreddit}
          />
        );
      case "twitch":
        return this.props.twitchChannels.map(channel =>
          <ListingItem
            mode={this.props.mode}
            deleteMode={this.state.deleteMode}
            handleClick={this.handleTwitchClick}
            selected={this.props.match.params.id == channel.idName}
            key={channel.id}
            channel={channel}
          />
        );
      default:
        return null;
    }
  }

  render() {
    return (
      <div className={this.props.visible ? "listing-wrapper" : "hidden"}>
        <div className="listing-content">
          <ListingHeader />
          <ListingInformationContainer
            mode={this.props.mode}
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
