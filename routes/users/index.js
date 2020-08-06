const router = require('express').router;
const usersController = require("../../controllers/user");

// api/jobs
router.route("/")
.get(usersController.getUsers);
.post(jobsController.createJob);
