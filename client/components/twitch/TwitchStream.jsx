import React from "react";
import Loader from "../loader/Loader";

class TwitchStream extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.props.fetchStream(this.props.match.params.id);
    }
  }

  renderBackground(url) {
    if (url) {
      return {
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
      };
    } else {
      return {
        backgroundImage:
          "url(http://res.cloudinary.com/jinchen93/image/upload/v1500188306/bg_glitch_pattern_eocwoe.png)",
      };
    }
  }

  render() {
    const { loading, stream } = this.props;

    if (loading) {
      return <Loader type="twitch" />;
    }

    if (stream) {
      return (
        <div className="twitch-stream-wrapper">
          <div className="embed-wrapper">
            <div className="embed-container">
              <iframe
                className="twitch-stream"
                src={stream.embed}
                frameBorder="0"
                allowFullScreen
              />
            </div>
            <div className="status">
              <img src={stream.logo} alt={stream.name} />
              <div className="status-description">
                <div>
                  {stream.status}
                </div>
                <div className="bottom-info">
                  <div className="game">
                    <i className="ion-ios-game-controller-a" />
                    {stream.game}
                  </div>
                  <div className="viewers">
                    <i className="ion-android-person" />
                    <div>
                      {stream.viewers}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="chat-embed">
            <iframe className="twitch-chat" src={stream.chat} frameBorder="0" />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default TwitchStream;
