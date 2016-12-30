import React, { Component }           from 'react';
import { connect }                    from 'react-redux';
import { bindActionCreators}          from 'redux';
import Channel                        from '../components/channel';
import { 
  selectChannel, 
  fetchVideos, 
  selectVideo,
  fetchChannel,
  onUsernameInput
} from '../actions';

class Channels extends Component {
  render() {
    return(
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          <div className="channel-list">
            <div className="list-header">
              <a href="https://youtube.com" target="_blank">
                <img src="https://www.youtube.com/yt/brand/media/image/YouTube-icon-full_color.png" alt="Youtube Logo" />
              </a>
              <hr />
            </div>
            {this.props.channels.map( (channel) => 
              <Channel 
                key={channel.username}
                position={this.props.channels.map( channel => channel.username ).indexOf(channel.username)} 
                name={channel.name}
                handleClick={ (position) => {
                  this.props.selectChannel(position);
                  this.props.fetchVideos(this.props.channels[position]);
                  this.props.selectVideo(0);
                }}
                status={this.props.channels[this.props.channel].name === channel.name ? "activeChannel" : "inactiveChannel"}
                image={channel.thumbnail}
              />
            )}

            <form 
              onSubmit={ (e) => {
                e.preventDefault();
                this.props.fetchChannel(this.props.usernameInput);
                this.props.onUsernameInput('');
              }}
              className="input-group">
              <input 
                className="form-control" 
                placeholder="Add username" 
                value={this.props.usernameInput}
                onChange={ e => this.props.onUsernameInput(e.target.value)}
              />
              <span className="input-group-btn">
                <button className="btn btn-success">+</button>
              </span>
            </form>

          </div>
        </ul>
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {
    channels: state.channels,
    channel: state.channel,
    usernameInput: state.usernameInput
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectChannel, fetchVideos, selectVideo, fetchChannel, onUsernameInput }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Channels);