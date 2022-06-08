import React from "react";
import Nav from "../Nav/index"
import classes from "../NavandContent/style.module.css"
import ContentContainer from "../Content/MyPosts/contentCont"

const NavAndContent = (props) => {
  return (
    <div className={classes.navAndContent}>
      <Nav />
      <ContentContainer posts = {props.posts}  dispatch = {props.dispatch}/>
    </div>
  );
};

export default NavAndContent;