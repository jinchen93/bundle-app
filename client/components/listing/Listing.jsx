import React from "react";
import ListingHeader from "./ListingHeader";
import ListingItem from "./ListingItem";
import ListingInformationContainer from "./ListingInformationContainer.js";

class Listing extends React.Component {
  constructor(props) {
    super(props);
    this.state = { deleteMode: false };
    this.handleClick = this.handleClick.bind(this);
    this.dispatchDeleteAction = this.dispatchDeleteAction.bind(this);
    this.toggleDeleteMode = this.toggleDeleteMode.bind(this);
  }

  toggleDeleteMode() {
    this.setState({ deleteMode: !this.state.deleteMode });
  }

  handleClick(e) {
    if (this.state.deleteMode) {
      e.preventDefault();
      const target = e.currentTarget;
      const name = target.getAttribute("data-name");
      const mode = target.getAttribute("data-mode");
      const id = target.getAttribute("data-id");
      const confirm = window.confirm(
        `Are you sure you want to delete ${name}?`
      );
      if (confirm) {
        this.dispatchDeleteAction(mode, id).then(() => {
          this.toggleDeleteMode();
        });
      }
    }
  }

  dispatchDeleteAction(mode, id) {
    switch (mode) {
      case "twitch":
        return this.props.removeTwitchChannel(id);
      case "reddit":
        return this.props.removeSubreddit(id);
      case "youtube":
        return this.props.removeYoutubeChannel(id);
      default:
        return;
    }
  }

  renderMode() {
    switch (this.props.mode) {
      case "youtube":
        return this.props.youtubeChannels.map(channel =>
          <ListingItem
            mode={this.props.mode}
            deleteMode={this.state.deleteMode}
            handleClick={this.handleClick}
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
            handleClick={this.handleClick}
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
            handleClick={this.handleClick}
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
