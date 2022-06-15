import { connect } from "react-redux";
import React from "react";
import NavAndContent from "./index";
import axios from "axios";
import { setUsersProfile } from "../redux/profileReducer";
import  {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

class NavAndContentContainer extends React.Component {
  componentDidMount() {
    let userID = this.props.router.params.userID;
    if (!userID) {
      userID = 2;
    }
    console.log(userID, 555);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/` + userID)
      .then((response) => {
        this.props.setUsersProfile(response.data);
      });
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
export default connect(mapStateToProps, { setUsersProfile })(withRouter(NavAndContentContainer));
