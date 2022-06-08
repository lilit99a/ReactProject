import React from "react";
import classes from "./styles.module.css";
import DialogItem from "../Dialogs/DialogItem/index";
import Message from "../Dialogs/Message/index";


const Dialog = (props) => {
  let dialogs = props.messagePage.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let message = props.messagePage.message.map((m) => (
    <Message message={m.message} id={m.id} />
  ));

  let newMessageBody = props.messagePage.newMassagebody;

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
