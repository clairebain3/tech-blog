const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const userRoutes = require('./api/userRoutes');
const postRoutes = require('./api/postRoutes');
const commentRoutes = require('./api/commentRoutes');
router.use('/user', userRoutes);
router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);

module.exports = router;