import React from "react";
import YoutubeVideoList from "./YoutubeVideoList";

class Media extends React.Component {
  constructor(props) {
    super(props);
    this.renderEmbed = this.renderEmbed.bind(this);
    this.renderVideoList = this.renderVideoList.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.resetCurrentVideo();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentChannel !== this.props.currentChannel) {
      this.resetCurrentVideo();
    }
  }

  resetCurrentVideo() {
    this.props.receiveYoutubeCurrentVideo(0);
  }

  renderEmbed() {
    const { videos, currentVideo } = this.props;
    if (videos.length) {
      const currentVideoId = videos[currentVideo].snippet.resourceId.videoId;
      return (
        <div className="embed-wrapper">
          <div className="embed-container">
            <iframe
              src={`http://www.youtube.com/embed/${currentVideoId}`}
              frameBorder="0"
              allowFullScreen
            />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }

  renderVideoList() {
    if (this.props.videos.length) {
      return (
        <YoutubeVideoList
          currentVideo={this.props.currentVideo}
          handleClick={this.handleClick}
          videos={this.props.videos}
        />
      );
    } else {
      return null;
    }
  }

  handleClick(e) {
    console.log(e.currentTarget.getAttribute("data-idx"));
    this.props.receiveYoutubeCurrentVideo(
      e.currentTarget.getAttribute("data-idx")
    );
  }

  render() {
    return (
      <div className="media-wrapper">
        <div className="media-content">
          {this.renderEmbed()}
          {this.renderVideoList()}
        </div>
      </div>
    );
  }
}

export default Media;
