import { connect } from "react-redux";
import Content from "./";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
  };
};

const ContentContainer = connect(mapStateToProps)(Content);
export default ContentContainer;
