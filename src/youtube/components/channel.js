import React from 'react';

export default (props) => {
  return(
    <li
      onClick={ () => { props.handleClick(props.id) } } 
      className={props.status}>
      <a id={props.status}><span>{props.name}</span></a>
    </li>
  );
};