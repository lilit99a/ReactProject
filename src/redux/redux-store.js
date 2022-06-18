import { applyMiddleware, combineReducers, createStore } from "redux";
import { profileReducer } from "./profileReducer";
import { dialogsREducer } from "./dialogsReducer";
import { userReducer } from "./usersReducer";
import { authleReducer } from "./authReducer";
import thunkMiddleware from "redux-thunk"

const reducers = combineReducers({
  profilePage: profileReducer,
  messagePage: dialogsREducer,
  userPage: userReducer,
  auth: authleReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;
