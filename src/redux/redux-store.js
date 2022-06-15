import { combineReducers, createStore } from "redux";
import { profileReducer } from "./profileReducer";
import { dialogsREducer } from "./dialogsReducer";
import { userReducer } from "./usersReducer";
import { authleReducer } from "./authReducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  messagePage: dialogsREducer,
  userPage: userReducer,
  auth: authleReducer,
});

const store = createStore(reducers);
window.store = store;
export default store;
