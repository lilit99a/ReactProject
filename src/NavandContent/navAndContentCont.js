import { connect } from "react-redux";
import NavAndContent from "./index"
const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
  };
};

const NavAndContentContainer = connect(mapStateToProps)(NavAndContent);

export default NavAndContentContainer;
