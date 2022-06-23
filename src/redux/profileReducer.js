import { userAPI, profileAPI } from "../api/index";
const ADD_POST = "ADD-POST";
const CHANGE_POST = "CHANGE-POST";
const SET_USERS_PROFILE = "SET-USERS-PROFILE";
const SET_STATUS = "SET_STATUS";
const UPDATE_STATUS = "UPDATE_STATUS";
//
const NEW_STATUS = "NEW_STATUS"

let initialState = {
  posts: [
    { message: "Hiii", id: 1 },
    { message: "It's my first post!!", id: 2 },
    { message: "It's my first post!!", id: 2 },
  ],
  newPostText: "",
  profile: null,
  status: "",
  newStatus: ""
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
      return { ...state, profile: action.message };
    }
    case SET_STATUS: {
      return { ...state, status: action.message };
    }
    //?
    case UPDATE_STATUS: {
      return {...state, status:action.message}
    }
   //
   case NEW_STATUS: {
     return {...state, newStatus: action.message}
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

export const setStatusAC = (status) => {
  return {
    type: "SET_STATUS",
    message: status,
  };
};
export const updateStatusAC = (status) => {
  return {
    type: UPDATE_STATUS,
    message: status,
  }
}

export const getUsesProfile = (userID) => (dispatch) => {
  userAPI.getProfile(userID).then((response) => {
    dispatch(setUsersProfile(response.data));
  });
};

export const getStatus = (userID) => (dispatch) => {
  profileAPI.getStatus(userID).then((response) => {
    console.log(response, "responseData")
    dispatch(setStatusAC(response.data));
  });
};

export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((response) => {
    if (response.data.resultCode === 0) {
      dispatch(setStatusAC(status));
    }
  });
};

//
export const onStatusChange = (newStatus) => {
     return {
       type: "NEW_STATUS",
       message: newStatus
     }
}