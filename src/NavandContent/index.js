import React from "react";
import Nav from "../Nav/index"
import classes from "../NavandContent/style.module.css"
import ContentContainer from "../Content/contentCont"

const NavAndContent = (props) => {
  return (
    <div className={classes.navAndContent}>
      <Nav />
      {/* <ContentContainer posts = {props.posts}  dispatch = {props.dispatch}/> */}
      <ContentContainer profile = {props.profile} />
    </div>
  );
};

export default NavAndContent;