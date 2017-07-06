import React from "react";
import SwitchFormButton from "./SwitchFormButton";
import SessionFormContainer from "./SessionFormContainer";

const SplashPage = ({ formType }) =>
  <div className="splash-page-wrapper">
    <SwitchFormButton formType={formType} />
    <SessionFormContainer formType={formType} />
  </div>;

export default SplashPage;
