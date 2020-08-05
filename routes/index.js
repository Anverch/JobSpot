const Router = require('express').Router;
const apiRoutes = require('./apiRoutes');

const router = new Router();

router.use('/api', apiRoutes);


module.exports = router;