const router = require('express').router();
const usersController = require("../../controllers/user");

// api/jobs
router.route("/")
    .get(usersController.getUsers)
    .post(jobsController.createUser);

router.route("/:id")
    .get(usersController.getUser)
    .put(usersController.updateUser)
    .delete(usersController.deleteUser);

module.exports = router
