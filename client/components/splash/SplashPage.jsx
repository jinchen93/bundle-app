import React from "react";
import SwitchFormButton from "./SwitchFormButton";
import SessionFormContainer from "./SessionFormContainer";

const SplashPage = ({ formType }) =>
  <div className="splash-page-wrapper">
    <SwitchFormButton formType={formType} />
    <SessionFormContainer formType={formType} />
    <a className="github" href="https://github.com/jinchen93/bundle-app">
      Made by Jin Chen
    </a>
  </div>;

export default SplashPage;
