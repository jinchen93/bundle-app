// @flow

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { logout } from "../../actions/session_actions";
import { getName } from "../../selectors/nav_selectors";
import Nav from "./Nav";

const mapStateToProps = (state, ownProps) => {
  return {
    name: getName(state, ownProps),
  };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));
