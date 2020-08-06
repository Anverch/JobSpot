const router = require('express').Router();
const usersController = require("../../controllers/user");

// Matches with "/api/jobs"
router.route("/")
    .get(usersController.getUsers)
    .post(usersController.createUser);

// Matches with "/api/users/:id" 
router.route("/:id")
    .get(usersController.getUser)
    .put(usersController.updateUser)
    .delete(usersController.deleteUser);

module.exports = router
