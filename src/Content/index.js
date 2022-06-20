import React from "react";
import classes from "./style.module.css";
import AddPostContainer from "./MyPosts/AddPost/postContainer";
import Preloader from "../Preloader/index"
import SomePost  from "./MyPosts/Posts/SomePost";

const Content = (props) => {
   let postElement = props.posts.map( p =>  <SomePost message = {p.message} id= {p.id}/>)

  if(!props.profile){
    return <Preloader />
  }
  return (

    <div className={classes.content}>
      <img
        className = {classes.img1}
        src="https://www.searchenginejournal.com/wp-content/uploads/2018/10/How-to-Boost-Your-Images%E2%80%99-Visibility-on-Google-Images-760x400.png"
      />
       <div>
       <img src = {props.profile.photos.large} />
     </div>
      {/* <AddPostContainer dispatch={props.dispatch} /> */}
      <AddPostContainer />
      <div>
        <ul>
          <li>Name:Lilit</li>
          <li>Surname:Av</li>
          <li>Age:22</li>
        </ul>
      </div>
     {postElement} 
     
    </div>
  );
};

export default Content;
