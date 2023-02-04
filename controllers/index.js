const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const userRoutes = require('./api/userRoutes');
router.use('/user', userRoutes);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);

module.exports = router;