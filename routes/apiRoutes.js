const Router = require('express').Router;
const userRoutes = require('./users');

const apiRoutes = Router();

apiRoutes.use('/users', userRoutes);

module.exports = apiRoutes;