import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to="/" style={{ textDecoration: "none" }}>
          <h1>
            Shop<span>It</span>
          </h1>
        </Link>
      </div>
      <div className="nav-items">
        <Link to="/login">Log in</Link>
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Navbar;
