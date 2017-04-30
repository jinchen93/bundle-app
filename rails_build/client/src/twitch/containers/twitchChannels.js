import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ListGroup} from 'react-bootstrap';

import TwitchChannel from '../components/twitchChannel';
import {selectTwitchChannel, fetchTwitchChannel} from '../actions';
import {SidebarForm, SidebarList} from '../../app/components/sidebar/modules';

class TwitchChannels extends Component {
  render() {
    const {twitchChannels} = this.props;

    const onSelectClick = position => {
      this.props.selectTwitchChannel(position);
    };

    const onDeleteClick = (id, position) => {
      this.props.deleteTwitchChannel({
        id: id,
        csrf_token: this.props.user.csrf_token,
      });
      if (position === twitchChannels.current) {
        if (position === twitchChannels.all.length - 1) {
          this.props.selectTwitchChannel(0);
        } else {
          this.props.selectTwitchChannel(position);
        }
      }
    };

    return (
      <SidebarList
        sidebarHidden={this.props.sidebarHidden}
        navbarToggle={this.props.navbarToggle}
      >
        <div className="sidebar__wrapper__header">
          <h2>CHANNELS</h2>
        </div>
        <ListGroup>
          {twitchChannels.all.map(channel => (
            <TwitchChannel
              key={channel.id.toString()}
              id={channel.id.toString()}
              position={twitchChannels.all
                .map(channel => channel.username)
                .indexOf(channel.username)}
              name={channel.displayName}
              current={twitchChannels.current}
              onSelectClick={onSelectClick}
              onDeleteClick={onDeleteClick}
              status={
                twitchChannels.all[twitchChannels.current].name === channel.name
                  ? 'sidebar__wrapper__channel--selected'
                  : 'sidebar__wrapper__channel'
              }
              image={channel.logo}
              live={channel.live}
              viewers={channel.viewers}
            />
          ))}
        </ListGroup>
        <SidebarForm
          inputVal={this.props.twitchInput}
          type="YOUTUBE"
          inputAction={this.props.onTwitchInput}
          csrf_token={this.props.user.csrf_token}
          deleteAction={this.props.deleteAllTwitchChannels}
          addAction={this.props.fetchTwitchChannel}
        />
      </SidebarList>
    );
  }
}

function mapStateToProps(state) {
  return {
    twitchChannels: state.twitchChannels,
    sidebarHidden: state.sidebarHidden,
    navbarToggle: state.navbarToggle,
    user: state.user,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchTwitchChannel,
    selectTwitchChannel,
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(TwitchChannels);
