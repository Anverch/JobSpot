import axios from "axios";

export default {
  //Gets all jobs
  getJobs: function () {
    return axios.get("/api/jobs");
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
    return axios.post("/api/books", jobInfo);
  },
  //Gets all users
  getUsers: function () {
    return axios.get("/users");
  },
  //Gets one user based on id
  getUser: function (id) {
    return axios.get("/users/" + id);
  },
  //Updates on user based on id
  updateUser: function (id) {
    return axios.put("/users/" + id);
  },
  //Saves a new user to the database
  createUser: function (userInfo) {
    return axios.post("/users", userInfo);
  },
  deleteUser: function (id) {
    return axios.delete("/users/" + id);
  },
};
