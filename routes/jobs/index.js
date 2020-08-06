const router = require('express').Router();
const jobsController = require("../../controllers/jobs");

// Matches with "/api/jobs"
router.route("/")
    .get(jobsController.getJobs)
    .post(jobsController.createJob);

// Matches with "/api/jobs/:id" 
router.route("/:id")
    .get(jobsController.getJob)
    .put(jobsController.updateJob)
    .delete(jobsController.deleteJob);
    
module.exports = router