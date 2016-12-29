import React, { Component }         from 'react';
import { connect }                  from 'react-redux';
import { bindActionCreators}        from 'redux';
import { selectChannel }            from '../actions';
import Channel                      from '../components/channel';

class Channels extends Component {
  render() {
    return(
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          {this.props.channels.map( (channel) => 
            <Channel 
              key={channel.id}
              id={channel.id} 
              name={channel.name}
              handleClick={ (id) => this.props.selectChannel(id) }
              status={this.props.channels[this.props.channel].name === channel.name ? "activeChannel" : "inactiveChannel"}
            /> 
          )}
        </ul>
      </div>
    );
  };
};

function mapStateToProps(state) {
  return {
    channels: state.channels,
    channel: state.channel
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectChannel }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Channels);