import React, { Component }           from 'react';
import { connect }                    from 'react-redux';
import { bindActionCreators}          from 'redux';
import Channel                        from '../components/channel';
import { 
  selectChannel, 
  fetchVideos, 
  selectVideo,
  fetchChannel,
  onUsernameInput,
  deleteAllChannels,
  deleteChannel
} from '../actions';

import '../styles/channels.css';

class Channels extends Component {
  render() {
    const channels = this.props.channels;
    return(
      <div id="sidebar__wrapper">
        <ul className="sidebar__wrapper__nav">
          <div className="channel-list">
            <div className="list-header">
              <img src="https://www.youtube.com/yt/brand/media/image/YouTube-icon-full_color.png" alt="Youtube Logo" />
              <hr />
            </div>
            {
              channels.all.map( channel => 
                <Channel 
                  key={channel._id.toString()}
                  id={channel._id.toString()}
                  position={channels.all.map( channel => channel.username ).indexOf(channel.username)} 
                  name={channel.name}
                  current={channels.current}
                  onSelectClick={ position => {
                    this.props.selectChannel(position);
                    this.props.fetchVideos(channels.all[position]);
                    this.props.selectVideo(0);
                  }}
                  onDeleteClick={ id => {
                    this.props.deleteChannel(id);
                    this.props.selectVideo(0);
                  }}
                  status={channels.all[channels.current].name === channel.name ? "activeChannel" : "inactiveChannel"}
                  image={channel.thumbnail}
                />
              )
            }

            <form 
              onSubmit={ event => {
                event.preventDefault();
                this.props.fetchChannel(this.props.usernameInput);
                this.props.onUsernameInput('');
              }}
              className="input-group">
              <input 
                className="form-control" 
                placeholder="Add username" 
                value={this.props.usernameInput}
                onChange={ event => this.props.onUsernameInput(event.target.value)}
              />
              <span className="input-group-btn">
                <button className="btn btn-success">+</button>
              </span>
            </form>
            <a 
              href="#"
              className="btn btn-danger" 
              onClick={ () => {
                this.props.deleteAllChannels();
                document.getElementsByClassName('btn-danger').blur();
              }}>
              Clear Usernames
            </a>
          </div>
        </ul>
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {
    channels: state.channels,
    usernameInput: state.usernameInput,
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ 
    fetchVideos, 
    selectVideo, 
    selectChannel, 
    fetchChannel, 
    onUsernameInput,
    deleteAllChannels,
    deleteChannel
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Channels);