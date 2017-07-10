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
      this.props.receiveYoutubeCurrent(e.currentTarget.getAttribute("data-id"));
    }
  }

  render() {
    return (
      <div className="listing-wrapper">
        <div className="listing-content">
          <ListingHeader />
          <ListingInformationContainer
            deleteMode={this.state.deleteMode}
            toggleDeleteMode={this.toggleDeleteMode}
          />
          {this.props.youtubeChannels.map(channel =>
            <ListingItem
              deleteMode={this.state.deleteMode}
              handleClick={this.handleClick}
              selected={this.props.currentChannel == channel.id}
              key={channel.id}
              channel={channel}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Listing;
