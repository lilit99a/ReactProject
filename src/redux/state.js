import profileReducer from "./profileReducer";
import dialogsREducer from "./dialogsReducer"

let store = {
  _state: {
    profilePage: {
      posts: [
        { message: "Hiii", id: 1 },
        { message: "It's my first post!!", id: 2 },
        { message: "It's my first post!!", id: 2 },
      ],
      newPostText: "it",
    
    },
    messagePage: {
      message: [
        { message: "hello", id: 1 },
        { message: "hi", id: 2 },
        { message: "how are you?", id: 3 },
        { message: "Iam fine, how are you?", id: 4 },
      ],
      dialogs: [
        { name: "Lilit", id: 1 },
        { name: "Ani", id: 2 },
        { name: "Seda", id: 3 },
        { name: "Nelli", id: 4 },
      ],
       newMassagebody: "",
    },
  },
  // _rerenderEntireTree() {
  //   console.log("state changed");
  // },

  getState() {
    return this._state;
  },

  addPost(postMessage) {
    let newPost = {
      id: 5,
      message: postMessage,
    };
    this._state.profilePage.posts.push(newPost);
    console.log(this._state.profilePage, "addPost");
    this._rerenderEntireTree(this._state);
  },

  changeNewPost(newText) {
    this._state.profilePage.newPostText = newText;
    this._rerenderEntireTree(this._state);
  },

  subscribe(overserver) {
    console.log(overserver, "overserver");
    this._rerenderEntireTree = overserver;
  },

  dispatch(action) {
    const { type, message } = action;

     this._state.profilePage = profileReducer( this._state.profilePage, action);
     this._state.messagePage = dialogsREducer( this._state.messagePage, action);
     this._rerenderEntireTree(this._state);
    

  //   if (action.type === "ADD-POST") {
  //     console.log(this, "this");
  //     this.addPost(message);
  //     this._rerenderEntireTree(this._state);
  //   } else if (action.type === "CHANGE-POST") {
  //     this.changeNewPost(message);
  //     this._rerenderEntireTree(this._state);
  //   } else if (action.type === "CHANGE-MESSAGE") {
  //     this._state.messagePage.newMassagebody = action.body;
  //     console.log( this._state.messagePage.newMassagebody, "newMassagebody");
  //     this._rerenderEntireTree(this._state);
  //   } else if (action.type === "SEND-MESSAGE") {
  //     let body = this._state.messagePage.newMassagebody;
  //     this._state.messagePage.newMassagebody = "";
  //     this._state.messagePage.message.push({ message: body, id: 5 });
  //     this._rerenderEntireTree(this._state);
    // }
  },
};

export const addPostActionCreater = (postMessage) => {
  return {
    type: "ADD-POST",
    message: postMessage,
  };
};

export const changeNewPostAction = (newText) => {
  return {
    type: "CHANGE-POST",
    message: newText,
  };
};

export const changeNewMassageAction = (newMessage) => {
  return {
    type: "CHANGE-MESSAGE",
    body: newMessage,
  };
};

export const sendNewMessageAcction = (sendMessage) => {
  return {
    type: "SEND-MESSAGE",
    message: sendMessage,
  };
};

export default store;
window.store = store;
