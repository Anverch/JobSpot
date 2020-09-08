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
  createJob: function (jobInfo) {
    return axios.post("/api/jobs", jobInfo);
  },
  //The next 5 calls return jobs with a given status, used in JobsCounter component
  getJobsPending: function () {
    return axios.get("/api/jobs/pending");
  },
  getJobsInterested: function (id) {
    return axios.get("/api/jobs/interested/" + id);
  },
  getJobsApplied: function (id) {
    return axios.get("/api/jobs/applied/" + id);
  },
  getJobsInProcess: function (id) {
    return axios.get("/api/jobs/inprocess/" + id);
  },
  getJobsClosed: function (id) {
    return axios.get("/api/jobs/closed/" + id);
  },
  //Gets all users
  getUsers: function () {
    return axios.get("/api/users");
  },
  //Gets one user based on id
  getUser: function (id) {
    return axios.get("/api/users/" + id);
  },
  //Saves a new user to the database
  createUser: function (userInfo) {
    return axios.post("/api/users", userInfo);
  },
  //Updates on user based on id
  updateUser: function (id) {
    return axios.put("/api/users/" + id);
  },
  deleteUser: function (id) {
    return axios.delete("/api/users/" + id);
  },
  // Login to Application
  login: function (userInfo) {
    return axios.post("/api/users/login", userInfo);
  },
  getUserData: function () {
    return axios.get("/api/users/user_data");
  },
  // Logout
  logout: function () {
    return axios.post("/api/users/logout");

  }
};
