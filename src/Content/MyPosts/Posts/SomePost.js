import React from "react";
import classes from "../Posts/style.module.css";

const SomePost = (props) => {
  return (
    <div>
      <img
        className={classes.img}
        src="https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper.png"
      ></img>
      <div>
        <p>{props.message}</p>
        <p>{props.like}</p>
      </div>
    </div>
  );
};

export default SomePost;
