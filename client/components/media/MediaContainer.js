import { connect } from "react-redux";
import Media from "./Media";

const mapStateToProps = state => ({
  mode: state.mode,
});

export default connect(mapStateToProps)(Media);
