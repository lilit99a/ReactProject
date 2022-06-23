import {authMeAPI} from "../api/index"
const SET_USER_DATA = "SET_USER_DATA";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
};

export const authleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        //stexcvac objum ka serveric ekox datanery
        ...action.data,
        isAuth: true,
      };

    default:
      return state;
  }
};

export const setUserData = (userID, email, login) => {
  return {
    type: "SET_USER_DATA",
    message: { userID, email, login },
  };
};

export const getAuthUsersData = () => (dispatch) => {
  authMeAPI.me().then((response) => {
    if(response.data === 0) {
       dispatch(setUserData(response.data.data.login))
    }
});
}