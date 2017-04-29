import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ResponsiveEmbed, Grid, Row, Col} from 'react-bootstrap';
import Linkify from 'react-linkify';

class Player extends Component {
  render() {
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
                    src="http://player.twitch.tv/?channel=dotamajor&autoplay=true"
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
                src="http://twitch.tv/dotamajor/chat"
                height="600"
                width="350"
                scrolling="no"
              />
            </Col>
          </Row>
          <Row>
            <Col xs={8} className="twitch-header">
              <h2>DOTA</h2>
            </Col>
          </Row>
          <Row>
            <Col xs={8}>
              asdasd
              <div
                style={{
                  height: '2px',
                  background: '#2574A9',
                  marginTop: '10px',
                  marginBottom: '10px',
                }}
              />
              <Linkify>
                ASDASDASDSD
              </Linkify>
            </Col>
          </Row>
        </Grid>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    sidebarHidden: state.sidebarHidden,
    navbarToggle: state.navbarToggle,
  };
}

export default connect(mapStateToProps)(Player);
