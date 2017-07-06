import { connect } from "react-redux";
import React from "react";
import glamorous from "glamorous";

const StyledWrapper = glamorous.div(
  {
    position: "absolute",
    top: "50px",
    left: "250px",
    width: "calc(100% - 250px)",
    height: "auto",
    padding: "10px 20px",
    transition: "all 0.2s",
  },
  props => ({
    left: props.sidebarHidden ? 0 : "250px",
    width: props.sidebarHidden ? "100%" : "calc(100% - 250px)",
  }),
  props => ({
    "@media screen and (max-width: 767px)": {
      left: 0,
      width: "100%",
      top: props.navbarToggle ? "170px" : "50px",
    },
  })
);

class ContentWrapper extends React.Component {
  render() {
    return (
      <StyledWrapper
        sidebarHidden={this.props.sidebarHidden}
        navbarToggle={this.props.navbarToggle}
      >
        {this.props.children}
      </StyledWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    sidebarHidden: state.sidebarHidden,
    navbarToggle: state.navbarToggle,
  };
}

export default connect(mapStateToProps)(ContentWrapper);
