import {
  changeNewMassageAction,
  sendNewMessageAcction,
} from "../redux/dialogsReducer";
import { connect } from "react-redux";
import {withAuthReducer} from "../HOC/index"
import { compose } from "redux";
import Dialog from "./index"

// const DialogConteiner = (props) => {
//   let dialogs = props.state.messagePage.dialogs.map((d) => (
//     <DialogItem name={d.name} id={d.id} />
//   ));

//   let message = props.messagePage.message.map((m) => (
//     <Message message={m.message} id={m.id} />
//   ));
//   let newMessageBody = props.state.messagePage.newMassagebody;

//   let onNewMessageChange = (body) => {
//     props.store.dispatch(changeNewMassageAction(body));
//   };

//   let onSendMessageChange = () => {
//     props.store.dispatch(sendNewMessageAcction());
//   };

//   return (
//     <Dialog
//       changeNewMassage={onNewMessageChange}
//       sendNewMessage={onSendMessageChange}
//     />
//   );
// };

const mapStateToProps = (state) => {
  return {
    message: state.messagePage.message,
    dialogs: state.messagePage.dialogs,
    newMassagebody: state.messagePage.newMassagebody,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onNewMessageChange: (body) => {
      dispatch(changeNewMassageAction(body));
    },
    onSendMessageChange: (body) => {
      dispatch(sendNewMessageAcction(body));
    },
  };
};

// let AuthReducerComponent = withAuthReducer(DialogConteiner)

// const DialogConteiner = connect(mapStateToProps, mapDispatchToProps)(AuthReducerComponent);
 export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthReducer
)(Dialog)