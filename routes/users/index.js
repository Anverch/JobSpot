const router = require("express").Router();
const usersController = require("../../controllers/user");
const passport = require("../../config/passport");
var isAuthenticated = require("../../config/middleware/isAuthenticated");

// Matches with "/api/users"
router
  .route("/")
  .get(usersController.getUsers)
  .post(usersController.createUser);

// Matches with "/api/users/user_data"
router.route("/user_data").get(usersController.getUserData);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.getUser)
  .delete(usersController.deleteUser)
  .put(usersController.updateUser);

// Matches with "/api/users/login"
router.route("/login").post(passport.authenticate("local"), (req, res) => {
  const { email, id, name, Jobs } = req.user || {};
  res.json({ email, id, name, Jobs });
});
//Matches with "/checkAuthentication"
router.route("/checkauthentication").get(isAuthenticated, (req, res) => {
  const user = req.user ? req.user.dataValues : null;
  res.status(200).json({ user: user });
});
// Matches with "/api/users/logout"

router.route("/logout").post((req, res) => {
  if (req.user) {
    req.session.destroy();
    res.clearCookie("connect.sid");
    return res.json({ msg: "you logged out successfully!" });
  } else {
    return res.json({ msg: "no user to logout." });
  }
});

module.exports = router;
