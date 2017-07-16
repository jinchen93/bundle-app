import React from "react";
import YoutubeVideoList from "./YoutubeVideoList";
import YoutubeEmbed from "./YoutubeEmbed";
import Loader from "../loader/Loader";

class YoutubeContent extends React.Component {
  constructor(props) {
    super(props);
    this.renderEmbed = this.renderEmbed.bind(this);
    this.renderVideoList = this.renderVideoList.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderMostPopular = this.renderMostPopular.bind(this);
  }

  componentDidMount() {
    this.resetCurrentVideo();
    this.fetchNewVideos();
    if (!this.props.match.params.id) {
      this.props.fetchYoutubeMostPopular();
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentChannel !== this.props.currentChannel) {
      this.resetCurrentVideo();
      this.fetchNewVideos();
      if (!this.props.match.params.id) {
        this.props.fetchYoutubeMostPopular();
      }
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

  renderMostPopular() {
    const { videos, currentVideo } = this.props;
    if (videos.length) {
      const video = videos[currentVideo];
      const embedId = video.id;
      return <YoutubeEmbed video={video.snippet} embedId={embedId} />;
    }
    return null;
  }

  renderEmbed() {
    const { videos, currentVideo } = this.props;
    if (videos.length) {
      const video = videos[currentVideo];
      if (video.snippet.resourceId) {
        const embedId = video.snippet.resourceId.videoId;
        return <YoutubeEmbed video={video.snippet} embedId={embedId} />;
      }
    }
    return null;
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
    if (this.props.loading) {
      return (
        <div className="media-content">
          <Loader type="youtube" />
        </div>
      );
    }

    // Conditional rendering for /youtube vs. /youtube/id routes
    if (this.props.match.params.id) {
      return (
        <div className="media-content">
          {this.renderEmbed()}
          {this.renderVideoList()}
        </div>
      );
    } else {
      return (
        <div className="media-content">
          {this.renderMostPopular()}
          {this.renderVideoList()}
        </div>
      );
    }
  }
}

export default YoutubeContent;
