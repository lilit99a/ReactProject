import React from "react";
import Header from "./index"
import { connect } from "react-redux";
import {getAuthUsersData} from "../redux/authReducer"

class HeaderContainer extends React.Component {
    componentDidMount() {
      this.props.getAuthUsersData()
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
export default connect(mapStateToProps, {getAuthUsersData})(HeaderContainer);