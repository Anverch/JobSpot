import axios from "axios";

export default {
  //Gets all jobs for one user
  getJobs: function (id) {
    return axios.get("/api/jobs/" + id);
  },
  //Gets one job based on id
  getJob: function (id) {
    return axios.get("/api/jobs/" + id);
  },
  //Updates one job based on id
  updateJob: function (id) {
    return axios.put("/api/jobs/" + id);
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
  //   getUser: function (email) {
  //     return axios.get("/api/users/" + email);
  getUser: function (id) {
    return axios.get("/api/users/" + id);
  },
  //Updates on user based on id
  updateUser: function (id) {
    return axios.put("/api/users/" + id);
  },
  //Saves a new user to the database
  createUser: function (userInfo) {
    console.log("create user", (userInfo))
    return axios.post("/api/users", userInfo);
  },
  deleteUser: function (id) {
    return axios.delete("/api/users/" + id);
  },
  // Login to Application
  login: function (userInfo) {
    console.log("login route", (userInfo))
    return axios.post("/api/users/login", userInfo).then(res => {
      console.log("axios", res.data)    
    });
  },
  getUserData: function () {
    return axios.get("/api/users/user_data");
  },
  // Logout
  logout: function () {
    return axios.post("/api/users/logout");
  }
};
