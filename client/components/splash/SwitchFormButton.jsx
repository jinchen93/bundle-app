import React from "react";
import { Link } from "react-router-dom";

const SwitchFormButton = ({ formType }) => {
  if (formType === "signup") {
    return (
      <Link className="switch-form-button" to="/login">
        Log in
      </Link>
    );
  } else if (formType === "login") {
    return (
      <Link className="switch-form-button" to="/">
        Create an Account
      </Link>
    );
  }
};

export default SwitchFormButton;
