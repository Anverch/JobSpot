require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const db = require('./models');
const session = require('express-session');
// Requiring passport as we've configured it
var passport = require("./config/passport");

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
// Keeping track of user login status
app.use(
  session({ secret: process.env.SESSION_SECRET, resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use(routes);

const syncOptions = { force: false };

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(() => {
  app.listen(PORT, () => {
    console.log(
      '==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.',
      PORT,
      PORT
    );
  });
});

module.exports = app;
