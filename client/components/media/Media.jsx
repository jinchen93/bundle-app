import React from "react";
import YoutubeVideoList from "./YoutubeVideoList";
import moment from "moment";
import Linkify from "react-linkify";

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
      const video = videos[currentVideo].snippet;
      const currentVideoId = video.resourceId.videoId;
      return (
        <div className="embed-wrapper">
          <div className="embed-container">
            <iframe
              src={`http://www.youtube.com/embed/${currentVideoId}`}
              frameBorder="0"
              allowFullScreen
            />
          </div>
          <div className="video-info-container">
            <div className="youtube-video-title">
              {video.title}
            </div>

            <div>
              {moment(video.publishedAt).format("ddd, MMMM Do YYYY, h:mm A")}
            </div>
            <hr />
            <Linkify>
              {video.description}
            </Linkify>
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
