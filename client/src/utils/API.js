import axios from "axios";

// setting the header for the request
export const setHeader = (user) => {
  axios.defaults.headers.common = {
    user: user,
  };
};

export default {
  //Gets all jobs for one user
  getJobs: function () {
    if (axios.defaults.headers !== null) {
      const user = localStorage.getItem("user");
      setHeader(user);
    }
    return axios.get("/api/jobs");
  },
  //Gets one job based on id
  getJob: function (id) {
    return axios.get("/api/jobs/" + id);
  },
  updateJob: function (id, updatedJob) {
    return axios.put("/api/jobs/" + id, updatedJob);
  },
  //Saves a new job to the database
  saveJob: function (jobInfo) {
    return axios.post("/api/jobs", jobInfo);
  },
  //Gets all users
  getUsers: function () {
    return axios.get("/api/users");
  },
  //Gets one user based on id
  getUser: function (id) {
    return axios.get("/api/users/" + id);
  },
  //Updates on user based on id
  updateUser: function (id) {
    return axios.put("/api/users/" + id);
  },
  //Saves a new user to the database
  createUser: function (userInfo) {
    console.log(userInfo);
    return axios.post("/api/users", userInfo);
  },
  deleteUser: function (id) {
    return axios.delete("/api/users/" + id);
  },
  // Login to Application
  login: function (userInfo) {
    console.log(`userInfo:>>`, userInfo);
    return axios.post("/api/users/login", userInfo);
  },
  getUserData: function () {
    return axios.get("/api/users/user_data");
  },
  // Logout
  logout: function () {
    return axios.post("/api/users/logout");
  },
  //checkAuthentication
  checkAuthentication: function () {
    return axios.get("/api/users/checkauthentication");
  },
};
