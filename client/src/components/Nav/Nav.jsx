import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

function Nav() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/fitness">Fitness</Link>
      <Link to="/journal">Journal</Link>
      <Link to="/nutrition">Nutrition</Link>
    </div>
  );
}

export default Nav;
