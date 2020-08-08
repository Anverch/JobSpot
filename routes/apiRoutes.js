const Router = require('express').Router;
const userRoutes = require('./users');
const jobRoutes = require('./jobs');

const apiRoutes = Router();

apiRoutes.use('/users', userRoutes);
apiRoutes.use('/jobs', jobRoutes);

module.exports = apiRoutes;