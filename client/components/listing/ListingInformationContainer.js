import { connect } from "react-redux";
import { followYoutubeChannel } from "../../actions/youtube_actions";
import ListingInformation from "./ListingInformation";

const mapStateToProps = state => ({
  mode: state.mode,
});

const mapDispatchToProps = dispatch => ({
  followYoutubeChannel: name => dispatch(followYoutubeChannel(name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ListingInformation);
