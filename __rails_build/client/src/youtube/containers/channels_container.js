import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  selectChannel,
  fetchVideos,
  selectVideo,
  fetchChannel,
  onUsernameInput,
  deleteAllChannels,
  deleteChannel,
} from "../actions";
import Channels from "../components/channels";

function mapStateToProps(state) {
  return {
    channels: state.channels,
    usernameInput: state.usernameInput,
    sidebarHidden: state.sidebarHidden,
    user: state.user,
    navbarToggle: state.navbarToggle,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      fetchVideos,
      selectVideo,
      selectChannel,
      fetchChannel,
      onUsernameInput,
      deleteAllChannels,
      deleteChannel,
    },
    dispatch
  );
}

const ChannelsContainer = connect(
  mapStateToProps, 
  mapDispatchToProps)(
  Channels
);

export default ChannelsContainer;
