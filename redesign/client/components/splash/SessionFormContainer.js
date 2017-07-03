import SessionForm from "./SessionForm";
import { connect } from "react-redux";
import { login, signup } from "../../actions/session_actions";

const mapStateToProps = state => ({
  errors: state.session.errors,
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  login: user => dispatch(login(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
