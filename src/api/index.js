import axios from "axios";

const instace = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
});

export const userAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instace
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  follow(userID) {
   return  instace.post(
      `followf?page=${userID}`
    );
  },

  unfollow(userID) {
   return  instace.delete( `followf?page=${userID}`);
  },
  getProfile (userID) {
    console.log(userID, 'userID');
    return instace.get(`profile/` + userID)
  }
};

export const authMeAPI = {
  me() {
   return  instace.get(`auth/me`)
  }
}