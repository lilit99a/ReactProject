import React from "react";
import classes from "../NavandContent/style.module.css"
import ContentContainer from "../Content/contentCont"

const NavAndContent = (props) => {
  // debugger
  return (
    <div className={classes.navAndContent}>
      {/* <ContentContainer posts = {props.posts}  dispatch = {props.dispatch}/> */}
      <ContentContainer profile = {props.profile} status = {props.status} updateStatus = {props.updateStatus} onStatusChange = {props.onStatusChange}/>
    </div>
  );
};

export default NavAndContent;