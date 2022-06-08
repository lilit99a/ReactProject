import { connect } from "react-redux";
import Users from "./index";
import { followActionCreater, unfollowActionCreater, setUsersAC } from "../redux/usersReducer";

const mapStateToProps = (state) => {
    return{
       users: state.userPage.users
    }
}

const mapDispatchToProps = (dispatch) => {
    console.log(6666);
    return {
        follow: (userId) => {
            dispatch(followActionCreater(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowActionCreater(userId))
        },
        set_users: (users) => {
           dispatch(setUsersAC(users))
        }
    } 
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer; 