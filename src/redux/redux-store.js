import { combineReducers, createStore } from "redux";
import { profileReducer } from "./profileReducer";
import { dialogsREducer } from "./dialogsReducer";
import { userReducer } from "./usersReducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  messagePage: dialogsREducer,
  userPage: userReducer
});

const store = createStore(reducers);
window.store = store
export default store;
