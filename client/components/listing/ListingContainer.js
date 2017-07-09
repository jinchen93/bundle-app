import { connect } from "react-redux";
import Listing from "./Listing";
import { allYoutubeChannels } from "../../selectors/youtube_selectors";

const mapStateToProps = state => ({
  youtubeChannels: allYoutubeChannels(state),
});

export default connect(mapStateToProps)(Listing);
