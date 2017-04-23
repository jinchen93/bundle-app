import React, { Component}        from 'react';
import { connect }                from 'react-redux';
import { bindActionCreators }     from 'redux';
import { toggleSidebar }          from '../actions';

class Hamburger extends Component {
  render() {
    return(
      <div className='menu-toggle' onClick={ () => this.props.toggleSidebar(this.props.sidebar) }>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
    );
  };
};

function mapStateToProps(state) {
  return { sidebar: state.sidebar };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleSidebar }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Hamburger);