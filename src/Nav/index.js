import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./style.module.css";

const Nav = () => {
  return (
    <nav className={classes.nav}>
      <div>
        <NavLink  activeLink = {classes.active} to="/">Profile</NavLink>
      </div>
      <div>
        <NavLink activeLink = {classes.active} to="/dialogs">Message</NavLink>
      </div>
      <div>
        <NavLink activeLink = {classes.active} to = "/news">News</NavLink>
        </div>
        <div>
        <NavLink activeLink = {classes.active} to = "/users">Users</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
