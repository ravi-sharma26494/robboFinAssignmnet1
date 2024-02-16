import React from "react";
import { Link } from "react-router-dom";
import "./leftSidebar.css";
import logo from "/logo.svg";

const LeftSidebar = () => {
  const isLinkDisabled = true;
  return (
    <div className="left-sidebar">
      <div className="sidebar-section-with-image">
        <span className="site-logo-wrapper">
          <img src={logo} className="logo" alt="Site logo" />
        </span>
      </div>
      <Link
        to="/cart"
        className={`sidebar-section ${isLinkDisabled ? "disabled-link" : ""}`}
        onClick={(e) => isLinkDisabled && e.preventDefault()}
      >
        Cart
      </Link>
      <Link to="/" className="sidebar-section">
        Market
      </Link>
      <Link
        to="/settings"
        className={`sidebar-section ${isLinkDisabled ? "disabled-link" : ""}`}
        onClick={(e) => isLinkDisabled && e.preventDefault()}
      >
        Settings
      </Link>
      <Link
        to="/logout"
        className={`sidebar-section ${isLinkDisabled ? "disabled-link" : ""}`}
        onClick={(e) => isLinkDisabled && e.preventDefault()}
      >
        Logout
      </Link>
      <div className="remaining-space"></div>
    </div>
  );
};

export default LeftSidebar;
