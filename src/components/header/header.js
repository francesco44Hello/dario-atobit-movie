import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="ato-header">
      <div className="ato-logo-container">
        <a href="https://atomovies.vercel.app/">
          <img
            alt="logo"
            src="https://i.ibb.co/gDfXHfG/Logo-atomovies.png"
            className="ato-logo"
          ></img>
        </a>
      </div>
      <div className="ato-h1">
        <h1>Welcome to Atomovies</h1>
      </div>
    </div>
  );
};

export default Header;
