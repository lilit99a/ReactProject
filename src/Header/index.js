import React from "react";
import { NavLink } from "react-router-dom";
import style from "./style.module.css" 


const Header = (props) => {
  return (
    <header className = {style.Header}>
      <img
        className = {style.Logo}
        src="https://toppng.com/uploads/preview/free-fire-png-logo-11569068080w6jocjzwuk.png"
      ></img>
      <div className = {style.loginBlock}>
        {props.isAuth ? props.login
       : <NavLink to = {"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;