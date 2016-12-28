import React, { Component }         from 'react';
import { connect }                  from 'react-redux';
import { bindActionCreators}        from 'redux';
import { selectChannel }            from '../actions';

class Channels extends Component {
  render() {
    const renderChannels = this.props.channels.map( channel => {
      if (this.props.channels[this.props.channel].name === channel.name) {
        return (
          <li
            key={channel.name}
            onClick={ () => { this.props.selectChannel(channel.id) } } 
            className="activeChannel">
            <a id="activeChannel"><span>{channel.name}</span></a>
          </li>
        );        
      }
      // Render inactive channel buttons
      else {
        return (
          <li
            key={channel.name}
            onClick={ () => { this.props.selectChannel(channel.id) } } 
            className="inactiveChannel">
            <a><span>{channel.name}</span></a>
          </li>
        );
      }
    });

    return(
      <div id="sidebar-wrapper">
        <ul className="sidebar-nav">
          {renderChannels}
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