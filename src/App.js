import React from "react";
import "./App.css";
import Header from "./Header";
import NavAndContent from "./NavandContent";
import { Route, Routes } from "react-router-dom";
import News from "./News";
import UsersContainer from "./Users/usersContainer";
import DialogConteiner from "./Dialogs/dialogsConteiner";
import NavAndContentContainer from "./NavandContent/navAndContentCont"

const App = (props) => {
  return (
    <div className="App">
      <Header />
      <div className="componentNavDialog">
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
            />
            <Route path="/news" element={<News />} />
            <Route path="/users" element={<UsersContainer/>} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
