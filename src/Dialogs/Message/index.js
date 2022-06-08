import React from "react";
import Nav from "../../Nav";

const Message = (props) => {
  return (
      <div>
        {/* <Nav /> */}
      <div>{props.message}</div>
    </div>
  );
};

export default Message;
