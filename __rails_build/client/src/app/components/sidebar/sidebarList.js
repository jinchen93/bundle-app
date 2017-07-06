import React from 'react';

export default props => {
  return (
    <div
      className={`sidebar__wrapper
        ${props.sidebarHidden === true ? 'sidebar__wrapper--hidden' : ''}
        ${props.navbarToggle === true ? 'sidebar__wrapper--navbar-toggled' : ''}
      `}
    >
      {props.children}
    </div>
  );
};
