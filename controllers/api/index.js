const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const homeRoutes = require('../home-routes');
router.use('/user', userRoutes);
router.use('/posts', postRoutes);
router.use('/home', homeRoutes);

module.exports = router;
