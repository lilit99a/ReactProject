const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
  users: [
    {
      id: 1,
      photo:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80",
      followed: "false",
      fullName: "Dmitriy",
      status: "I am fine",
      location: { city: "Vanadzor", country: "Armenia" },
    },
    {
      id: 2,
      photo:
        "https://media.istockphoto.com/photos/confident-asian-woman-trying-to-help-her-customers-picture-id1352462896?b=1&k=20&m=1352462896&s=170667a&w=0&h=aYIYAc8DgWoSgeQBVy3g4FKKvJa_B1kD_3DOvWCPSYY=",
      followed: "true",
      fullName: "Nelli",
      status: "I am so happy ))))))",
      location: { city: "Erevan", country: "Armenia" },
    },
    {
      id: 3,
      photo:
        "https://us.123rf.com/450wm/sorrapongs/sorrapongs1708/sorrapongs170800065/84789926-new-generation-asians-business-woman-using-laptop-at-office-asian-women-sitting-smiling-while-workin.jpg?ver=6",
      followed: "false",
      fullName: "Ani",
      status: "I am eating a pice of cake )))",
      location: { city: "Spitak", country: "Armenia" },
    },
  ],
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
      return { ...state, users: [...state.users, ...action.users] };
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
