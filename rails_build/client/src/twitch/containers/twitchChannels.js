import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {SidebarForm, SidebarList} from '../../app/components/sidebar/modules';

class TwitchChannels extends Component {
  render() {
    return (
      <SidebarList
        sidebarHidden={this.props.sidebarHidden}
        navbarToggle={this.props.navbarToggle}
      >
        asd
      </SidebarList>
    );
  }
}

function mapStateToProps(state) {
  return {
    sidebarHidden: state.sidebarHidden,
    navbarToggle: state.navbarToggle,
    user: state.user,
  };
}

export default connect(mapStateToProps)(TwitchChannels);
