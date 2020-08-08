const router = require('express').Router();
const jobsController = require("../../controllers/job");
// Requiring our custom middleware for checking if a user is logged in. Routes with 'isAuthenticated' passed through are restricted routes for members only. 
var isAuthenticated = require("../../config/middleware/isAuthenticated");

// Matches with "/api/jobs"
router.route("/")
    .get(jobsController.getJobs)
    .post(jobsController.createJob)
    .put(isAuthenticated, jobsController.updateJob)

// Matches with "/api/jobs/:id" 
router.route("/:id")
    .get(jobsController.getJob)
    .delete(jobsController.deleteJob);

// Matches with "/api/jobs/user/:id"
router.route("/user/:id")
    .get(jobsController.getJobsByUser);

module.exports = router