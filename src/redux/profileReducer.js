import {userAPI} from "../api/index"
const ADD_POST = "ADD-POST";
const CHANGE_POST = "CHANGE-POST";
const SET_USERS_PROFILE = "SET-USERS-PROFILE";


let initialState = {
  posts: [
    { message: "Hiii", id: 1 },
    { message: "It's my first post!!", id: 2 },
    { message: "It's my first post!!", id: 2 },
  ],
  newPostText: "",
  profile: null
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: action.message,
      };
      let stateCopy = { ...state };
      // stateCopy.posts.push(newPost);
      stateCopy.posts = [...state.posts];
      stateCopy.posts.push(newPost);
      return stateCopy;
    }
    case CHANGE_POST: {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }
    case SET_USERS_PROFILE: {
      return {...state, profile: action.message}
    }
    default:
      return state;
  }
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

export const setUsersProfile = (profile) => {
  return {
    type: "SET-USERS-PROFILE",
    message: profile,
  };
};

export const getUsesProfile = (userID) => (dispatch) => {
  userAPI.getProfile(userID).then((response) => {
    dispatch(setUsersProfile(response.data));
  });
}