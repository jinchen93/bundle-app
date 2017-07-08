import React from "react";
import { redirectToRoot } from "../../utils/router_util";

const Nav = props => {
  const handleLogoutClick = e => {
    e.preventDefault();
    props.logout().then(() => {
      redirectToRoot(props);
    });
  };

  const handleImgClick = e => {
    e.preventDefault();
    redirectToRoot(props);
  };

  return (
    <div className="nav-wrapper">
      <img
        onClick={handleImgClick}
        src="http://res.cloudinary.com/jinchen93/image/upload/v1499466797/bundleme_rrdclf.svg"
        alt="BundleMe Logo"
      />
      <button className="nav-logout-btn" onClick={handleLogoutClick}>
        Logout
      </button>
    </div>
  );
};

export default Nav;
