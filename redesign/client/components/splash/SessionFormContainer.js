import SessionForm from "./SessionForm";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { login, signup } from "../../actions/session_actions";

const mapStateToProps = state => ({
  user: state.session.currentUser,
  errors: state.session.errors,
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  login: user => dispatch(login(user)),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SessionForm)
);
