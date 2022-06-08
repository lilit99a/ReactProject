const CHANGE_MESSAGE = "CHANGE-MESSAGE";
const SEND_MESSAGE = "SEND-MESSAGE";


let initislState = {
  dialogs: [
    { name: "Lilit", id: 1 },
    { name: "Ani", id: 2 },
    { name: "Seda", id: 3 },
    { name: "Nelli", id: 4 },
  ],

  message: [
    { message: "hello", id: 1 },
    { message: "hi", id: 2 },
    { message: "how are you?", id: 3 },
    { message: "Iam fine, how are you?", id: 4 },
  ],
  newMassagebody: "",
};

export const dialogsREducer = (state = initislState, action) => {
  switch (action.type) {
    case CHANGE_MESSAGE:
      state.newMassagebody = action.message;
      return state;
    case SEND_MESSAGE:
      console.log(action.message,5555);
      debugger
      const body = action.message;
      state.newMassagebody = "";
      state.message.push({ message:  body, id: 5 });
      return state;
    default:
      return state;
  }
};

export const changeNewMassageAction = (newMessage) => {
  return {
    type: "CHANGE-MESSAGE",
    message: newMessage,
  };
};

export const sendNewMessageAcction = (sendMessage) => {
  return {
    type: "SEND-MESSAGE",
    message: sendMessage,
  };
};