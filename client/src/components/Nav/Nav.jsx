import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

function Nav() {
  return (
    <div className="navBar">
      <h2>Shape Up</h2>
      <Link className="navLink" to="/">
        Home
      </Link>
      <Link className="navLink" to="/fitness">
        Fitness
      </Link>
      <Link className="navLink" to="/journal">
        Journal
      </Link>
      <Link className="navLink" to="/nutrition">
        Nutrition
      </Link>
    </div>
  );
}

export default Nav;
