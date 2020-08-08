const router = require('express').Router();
const usersController = require("../../controllers/user");
const passport = require("../../config/passport");

// Matches with "/api/users"
router.route("/")
    .get(usersController.getUsers)
    .post(usersController.createUser)
    .put(usersController.updateUser);

// Matches with "/api/users/:id" 
router.route("/:id")
    .get(usersController.getUser)
    .delete(usersController.deleteUser);

// Matches with "/api/users/login" 
router.route("/login")
    .post(passport.authenticate('local'), usersController.login);

module.exports = router
