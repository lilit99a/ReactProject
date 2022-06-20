import { connect } from "react-redux";
import React from "react";
import NavAndContent from "./index";
import  {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import {getUsesProfile} from "../redux/profileReducer"

class NavAndContentContainer extends React.Component {
  componentDidMount() {
    let userID = this.props.router.params.userID;
    if (!userID) {
      userID = 2;
    }
    console.log(userID, "userId222");
    this.props.getUsesProfile(userID)
  }

  render() {
    return <NavAndContent {...this.props} profile={this.props.profile} />;
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    profile: state.profilePage.profile,
  };
};
function withRouter(NavAndContentContainer) {
  function WithRouterURL(props) {
      let location = useLocation();
      let navigate = useNavigate();
      let params = useParams();
      return (
          <NavAndContentContainer
              {...props}
              router={{ location, navigate, params }}
          />
      );
  }

  return WithRouterURL;
}

// const WithRouterURL = withRouter(NavAndContentContainer);
export default connect(mapStateToProps, {getUsesProfile })(withRouter(NavAndContentContainer));
