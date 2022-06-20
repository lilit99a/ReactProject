import React from "react";
import "./App.css";
import HeaderContainer from "./Header/headerContainer";
import { Route, Routes } from "react-router-dom";
import News from "./News";
import UsersContainer from "./Users/usersContainer";
import DialogConteiner from "./Dialogs/dialogsConteiner";
import NavAndContentContainer from "./NavandContent/navAndContentCont";
import Login from "./Login";
import Nav from "./Nav";

const App = (props) => {
  return (
    <div className="App">
      <HeaderContainer />
      <div className="componentNavDialog">
        <Nav/>
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/dialogs"
              element={
                <DialogConteiner
                // state={props.state}
                // profilePage={props.state.profilePage}
                // messagePage={props.state.messagePage}
                />
              }
            />

            <Route
              path="/"
              element={
                <NavAndContentContainer
                // posts={props.state.profilePage.posts}
                // dispatch={props.dispatch}
                />
              }
            >
              <Route
                path=":userID"
                element={<NavAndContentContainer />}
              />
            </Route>
            <Route path="/news" element={<News />} />
            <Route path="users" element={<UsersContainer />} />
            <Route path="login" element= {<Login />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
