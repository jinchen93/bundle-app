import React from "react";

const HomePage = props => {
  const handleClick = e => {
    e.preventDefault();
    props.logout().then(() => props.history.push("/"));
  };
  return (
    <div>
      <button onClick={handleClick}>Logout</button>
      Hi
    </div>
  );
};

export default HomePage;
