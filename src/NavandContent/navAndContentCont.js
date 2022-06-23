import { connect } from "react-redux";
import React from "react";
import NavAndContent from "./index";
import  {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import {getUsesProfile, getStatus, updateStatus, onStatusChange} from "../redux/profileReducer"
import { compose } from "redux";

class NavAndContentContainer extends React.Component {
  componentDidMount() {
    let userID = this.props.router.params.userID;
    if (!userID) {
      userID = 2;
    }
    this.props.getUsesProfile(userID)
    this.props.getStatus(userID)
  }

  render() {
    return <NavAndContent {...this.props} profile={this.props.profile} status = {this.props.status} updateStatus = {this.props.updateStatus} onStatusChange = {this.props.onStatusChange} />;
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    profile: state.profilePage.profile,
    status:state.profilePage.status,
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

export default compose(connect(mapStateToProps, {getUsesProfile, getStatus,updateStatus,onStatusChange })(withRouter(NavAndContentContainer))) 

