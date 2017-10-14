// @flow

import React from "react";
import { Link } from "react-router-dom";
import { redirectTo } from "../../utils/router_util";

type Props = {
  logout: Function,
  mode: string,
  name: string,
};

const Nav = (props: Props) => {
  const handleLogoutClick = e => {
    e.preventDefault();
    props.logout().then(() => {
      redirectTo("/", props);
    });
  };

  return (
    <div className={`nav-wrapper border-${props.mode}`}>
      <Link to="/">
        <img
          src="http://res.cloudinary.com/jinchen93/image/upload/v1499466797/bundleme_rrdclf.svg"
          alt="BundleMe Logo"
        />
      </Link>
      <span className="nav-title">{props.name}</span>
      <button className="nav-logout-btn" onClick={handleLogoutClick}>
        Logout
      </button>
    </div>
  );
};

export default Nav;
