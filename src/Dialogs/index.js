import React from "react";
import classes from "./styles.module.css";
import DialogItem from "../Dialogs/DialogItem/index";
import Message from "../Dialogs/Message/index";
import {Navigate} from "react-router-dom"

const Dialog = (props) => {
  let dialogs = props.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));
  console.log(props.message, 44141);

  let message = props.message.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  let newMessageBody = props.newMassagebody;

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.onNewMessageChange(body)
    // props.store.dispatch(changeNewMassageAction(body));
  };

  let onSendMessageChange = () => {
    // let body = e.target.value;
    props.onSendMessageChange()
    // props.store.dispatch(sendNewMessageAcction());
  };

  // alert(props.isAuth)
  if(`props.isAuth`) return <Navigate to = {"/login"} />


  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItem}>{dialogs}</div>
      <div className={classes.message}>
        <div>{message}</div>
        <div>
          <div>
            <textarea value={props.newMessageBody} 
            placeholder="Enter your message"
            onChange={onNewMessageChange} />
          </div>
          <div>
            <button
              onClick={onSendMessageChange}
            >
              send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
