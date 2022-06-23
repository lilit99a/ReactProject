import React from "react";
import AddPostContainer from "./MyPosts/AddPost/postContainer";
import Preloader from "../Preloader/index"
import SomePost  from "./MyPosts/Posts/SomePost";
import ProfileStatus from "./MyPosts/ProfileStatus";
import userPhoto from "../images/user.png";

const Content = (props) => {
   let postElement = props.posts.map( p =>  <SomePost message = {p.message} id= {p.id}/>)

  if(!props.profile){
    return <Preloader />
  }
  return (
    <div>
       <div>
       <img src = {props.profile.photos.large ? props.profile.photos.large : userPhoto } />
     </div>
      {/* <AddPostContainer dispatch={props.dispatch} /> */}
      <ProfileStatus status = {props.status} updateStatus = {props.updateStatus} userId = {props.profile.userId} onStatusChange = {props.onStatusChange}/>
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
