import React from "react";
import Header from "./index"
import axios from "axios";
import { connect } from "react-redux";
import {setUserData} from "../redux/authReducer"


class HeaderContainer extends React.Component {
    componentDidMount() {
        axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
          withCredentials: true
      })
      .then((response) => {
          debugger
          if(response.data === 0) {
              this.props.setUserData(response.data.data.login)
          }
      });
    }
    render() {
        return (
        <Header {...this.props}/>
        )
    }
}
const mapStateToProps = (state) => {
       return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
       }
}
export default connect(mapStateToProps, {setUserData})(HeaderContainer);