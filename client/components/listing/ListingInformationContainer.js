import { connect } from "react-redux";
import { followYoutubeChannel } from "../../actions/youtube_actions";
import { followSubreddit } from "../../actions/reddit_actions";
import { followTwitchChannel } from "../../actions/twitch_actions";
import ListingInformation from "./ListingInformation";

const mapDispatchToProps = dispatch => ({
  followYoutubeChannel: name => dispatch(followYoutubeChannel(name)),
  followSubreddit: name => dispatch(followSubreddit(name)),
  followTwitchChannel: name => dispatch(followTwitchChannel(name)),
});

export default connect(null, mapDispatchToProps)(ListingInformation);
