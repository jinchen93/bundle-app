import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logout } from "../../actions/session_actions";
import HomePage from "./HomePage";

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default withRouter(connect(null, mapDispatchToProps)(HomePage));
