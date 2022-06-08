import React from "react";
import { NavLink } from "react-router-dom";

const DialogItem = ({ id, name }) => {
  let path = "/dialog/" + id;
  return (
    <div>
      <NavLink to={path}>{name}</NavLink>
    </div>
  );
};

export default DialogItem;
