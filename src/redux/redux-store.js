import { applyMiddleware, combineReducers, createStore } from "redux";
import { profileReducer } from "./profileReducer";
import { dialogsREducer } from "./dialogsReducer";
import { userReducer } from "./usersReducer";
import { authleReducer } from "./authReducer";
import thunkMiddleware from "redux-thunk"
// import { reducer as formReducer } from 'redux-form'


const reducers = combineReducers({
  profilePage: profileReducer,
  messagePage: dialogsREducer,
  userPage: userReducer,
  auth: authleReducer,
  // form:formReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;
