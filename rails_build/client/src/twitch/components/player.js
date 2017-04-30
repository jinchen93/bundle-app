import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ResponsiveEmbed, Grid, Row, Col} from 'react-bootstrap';
import Linkify from 'react-linkify';

class Player extends Component {
  render() {
    const {twitchChannels} = this.props;
    const currentChannel = twitchChannels.all[twitchChannels.current];

    const renderViewerCount = () => {
      if (currentChannel.viewers > 0) {
        return (
          <span>
            <i id="record-icon" className="fa fa-user-circle" />
            <span id="viewer-count">{currentChannel.viewers}</span>
          </span>
        );
      } else {
        return <i id="record-icon" className="fa fa-power-off" />;
      }
    };

    if (twitchChannels.all.length > 0) {
      return (
        <Grid
          className={`content-wrapper
        ${this.props.sidebarHidden === true ? 'content-wrapper--expanded' : ''}
        ${this.props.navbarToggle === true ? 'content-wrapper--nav-toggled' : ''}`}
        >
          <Grid fluid={true} className="twitch-content-wrapper">
            <Row>
              <Col sm={8}>
                <div className="video-container">
                  <ResponsiveEmbed a16by9 className="video-container__embedd">
                    <iframe
                      src={`http://player.twitch.tv/?channel=${currentChannel.username}&autoplay=true`}
                      className="embed-responsive-item"
                      allowFullScreen
                    />
                  </ResponsiveEmbed>
                </div>
              </Col>
              <Col sm={4}>
                <iframe
                  className={
                    this.props.sidebarHidden === true
                      ? 'twitch-chat--expanded'
                      : 'twitch-chat'
                  }
                  frameBorder="0"
                  id="chat_embed"
                  src={`http://twitch.tv/${currentChannel.username}/chat`}
                  height="600"
                  width="350"
                  scrolling="no"
                />
              </Col>
            </Row>

            <Row>
              <Col sm={8} className="twitch-header">
                <h2>{currentChannel.status}</h2>

                <div
                  style={{
                    height: '2px',
                    background: '#2574A9',
                    marginTop: '10px',
                    marginBottom: '10px',
                  }}
                />
              </Col>
            </Row>
            {renderViewerCount()}
          </Grid>
        </Grid>
      );
    } else {
      return <div />;
    }
  }
}

function mapStateToProps(state) {
  return {
    sidebarHidden: state.sidebarHidden,
    navbarToggle: state.navbarToggle,
    twitchChannels: state.twitchChannels,
  };
}

export default connect(mapStateToProps)(Player);
