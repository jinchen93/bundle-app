import React, { Component } from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import { Grid, Row, Col } from "react-bootstrap";
import MainContainer from "./mainContainer";
import MainHeader from "./mainHeader";
import MediaLogo from "./mediaLogo";
import glamorous from "glamorous";
import { MEDIA_TYPES } from "../modules/mediaInfo";

const StyledCol = glamorous(Col)({
  marginBottom: "10px",
  textAlign: "center",
});

class Main extends Component {
  renderLogos() {
    return MEDIA_TYPES.map(media => {
      return (
        <StyledCol md={3} key={media.name}>
          <Link to={media.route}>
            <MediaLogo css={media.style} src={media.url} alt={media.alt} />
          </Link>
        </StyledCol>
      );
    });
  }

  render() {
    return (
      <MainContainer navbarToggle={this.props.navbarToggle}>
        <MainHeader />
        <Grid>
          <Row>
            <Col md={1} />
            {this.renderLogos()}
          </Row>
        </Grid>
      </MainContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    navbarToggle: state.navbarToggle,
  };
}

export default connect(mapStateToProps)(Main);
