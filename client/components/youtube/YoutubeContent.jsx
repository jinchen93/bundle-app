import React from "react";
import YoutubeVideoList from "./YoutubeVideoList";
import YoutubeEmbed from "./YoutubeEmbed";

class YoutubeContent extends React.Component {
  constructor(props) {
    super(props);
    this.renderEmbed = this.renderEmbed.bind(this);
    this.renderVideoList = this.renderVideoList.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.resetCurrentVideo();
    this.fetchNewVideos();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentChannel !== this.props.currentChannel) {
      this.resetCurrentVideo();
      this.fetchNewVideos();
    }
  }

  handleClick(e) {
    this.props.receiveYoutubeCurrentVideo(
      e.currentTarget.getAttribute("data-idx")
    );
  }

  fetchNewVideos() {
    if (this.props.currentChannel) {
      this.props.fetchYoutubeVideos(this.props.currentChannel);
    }
  }

  resetCurrentVideo() {
    this.props.receiveYoutubeCurrentVideo(0);
  }

  renderEmbed() {
    const { videos, currentVideo } = this.props;
    if (videos.length) {
      const video = videos[currentVideo].snippet;
      const embedId = video.resourceId.videoId;
      return <YoutubeEmbed video={video} embedId={embedId} />;
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

  render() {
    return (
      <div className="media-content">
        {this.renderEmbed()}
        {this.renderVideoList()}
      </div>
    );
  }
}

export default YoutubeContent;
