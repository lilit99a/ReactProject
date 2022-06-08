import React, { useEffect } from "react";
import style from "../AddPost/style.module.css";

const AddPost = (props) => {
  let newReactElement = React.createRef();

  let onAddPost = () => {
    let text = newReactElement.current.value;
    // props.dispatch(addPostActionCreater(text));
    props.addPost(text)
    newReactElement.current.value = ""
  };

  let onPostChange = () => {
    let text = newReactElement.current.value;
    // props.dispatch(changeNewPostAction(text));
    //importovem arel 
    props.onPostChange(text)
  };

  return (
    <div className={style.addPost}>
      <h3>My Posts</h3>
      <textarea
        onChange={onPostChange}
        ref={newReactElement}
        value={props.newPostText}
      />
      <div>
        <button onClick={onAddPost}>Click me!!!</button>
      </div>
    </div>
  );
};

export default AddPost;
