import { act } from "react-dom/test-utils";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT = "SET_TOTAL_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";

let initialState = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.type) {
            return { ...u, followed: "true" };
          }
          return u;
        }),
      };
    }
    case UNFOLLOW: {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.type) {
            return { ...u, followed: "false " };
          }
          return u;
        }),
      };
    }
    case SET_USERS: {
      // return { ...state, users: [...state.users, ...action.users] };
      return {
        ...state,
        users: action.users,
      };
    }
    case SET_CURRENT_PAGE: {
      console.log(action, "current");
      return { ...state, currentPage: action.message };
    }
    case SET_TOTAL_COUNT: {
      return { ...state, totalUsersCount: action.message };
    }
    case TOGGLE_IS_FETCHING: {
      return{...state, isFetching: action.message}
    }
    default:
      return state;
  }
};

export const followActionCreater = (userId) => {
  return {
    type: "FOLLOW",
    userId,
  };
};

export const unfollowActionCreater = (userId) => {
  return {
    type: "UNFOLLOW",
    userId,
  };
};

export const setUsersAC = (users) => {
  return {
    type: "SET_USERS",
    users,
  };
};

export const setCurrentPageAC = (currentPage) => {
  return {
    type: "SET_CURRENT_PAGE",
    message: currentPage,
  };
};

export const setTotalCountAC = (totalUsersCount) => {
  return {
    type: "SET_TOTAL_COUNT",
    message: totalUsersCount,
  };
};

export const toggleIsFetchingAC = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    message: isFetching
  };
};
