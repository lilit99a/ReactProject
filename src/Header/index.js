import React from "react";
import classes from "./style.module.css" 

const Header = () => {
  return (
    <header className = {classes.Header}>
      <img
        className = {classes.Logo}
        src="https://toppng.com/uploads/preview/free-fire-png-logo-11569068080w6jocjzwuk.png"
      ></img>
    </header>
  );
};

export default Header;