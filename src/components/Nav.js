import React from "react";
// import { Link } from "react-router-dom"; used <a></a>

const Nav = () => {
  return (
    <div style={{ height: "14vh", background: "black" }}>
      <a className="nav-a" href="/">
        <img
          className="nav-banner"
          src="marvel_banner.png"
          alt="marvel banner"
        />
      </a>
    </div>
  );
};

export default Nav;
