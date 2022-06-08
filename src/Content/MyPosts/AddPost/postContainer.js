import {
  addPostActionCreater,
  changeNewPostAction,
} from "../../../redux/profileReducer";
import AddPost from ".";
import { connect } from "react-redux";

// const AddPostContainer = (props) => {
//   let newReactElement = React.createRef();

//   let addPost = () => {
//     let text = newReactElement.current.value;
//     props.store.dispatch(addPostActionCreater(text));
//   };

//   let onPostChange = (text) => {
//     // let text = newReactElement.current.value;
//     // let action = changeNewPostAction(text)
//     props.store.dispatch(changeNewPostAction(text));
//   };

//   return <AddPost changeNewPostAction={onPostChange} addPost={addPost} />;
// };

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (postMessage) => {
      // let text = newReactElement.current.value;
      dispatch(addPostActionCreater(postMessage));
    },

    onPostChange: (text) => {
      dispatch(changeNewPostAction(text));
    },
  };
};
const AddPostContainer = connect(mapStateToProps, mapDispatchToProps)(AddPost);

export default AddPostContainer;
