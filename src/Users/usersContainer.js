import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  followActionCreater,
  unfollowActionCreater,
  setUsersAC,
  setCurrentPageAC,
  setTotalCountAC,
  toggleIsFetchingAC,
  toggleIsFollowing,
  getUsersThunkCreater
} from "../redux/usersReducer";
import Users from "./users";
import Preloader from "../Preloader";
import {userAPI} from "../api/index"
//setCurrentPage
class UsersAPIContainer extends React.Component {
  componentDidMount() {
    this.props.getUsersThunkCreater(this.props.currentPage, this.props.pageSize);
  }
  onPageChange = (pageNumber) => {
      // this.props.toggleIsFetching(true);
      this.props.getUsersThunkCreater(pageNumber, this.props.pageSize);
    //   userAPI.getUsers(pageNumber, this.props.pageSize).then((data) => {
    //   this.props.toggleIsFetching(false);
    //   this.props.setUsers(data.items);
    //   this.props.setTotalUsersCount(data.totalCount);
    // });
  };

  render() {
    let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
      pages.push(i);
    }
    return (
      <div>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChange={this.onPageChange}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          // toggleIsFollowing={this.props.toggleIsFollowing}
          followingInProgres={this.props.followingInProgres}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.userPage.users,
    pageSize: state.userPage.pageSize,
    totalUsersCount: state.userPage.totalUsersCount,
    currentPage: state.userPage.currentPage,
    isFetching: state.userPage.isFetching,
    followingInProgres: state.userPage.followingInProgres
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followActionCreater(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowActionCreater(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalCountAC(totalCount));
    },
    toggleIsFetching: (isFetching) => {
      dispatch(toggleIsFetchingAC(isFetching));
    },
  };
};

const UsersContainer = connect(mapStateToProps, {
  follow: followActionCreater,
  unfollow: unfollowActionCreater,
  setUsers: setUsersAC,
  setCurrentPage: setCurrentPageAC,
  setTotalUsersCount: setTotalCountAC,
  toggleIsFetching: toggleIsFetchingAC,
  toggleIsFollowing: toggleIsFollowing,
  getUsersThunkCreater: getUsersThunkCreater
   
  // naev kROX ENQ uxxaki grel follow poxelov import ev exportnery
})(UsersAPIContainer);

export default UsersContainer;
