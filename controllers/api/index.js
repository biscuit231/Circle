const router = require('express').Router();
const userRoutes = require('./userRoutes')




router.use('/users', userRoutes);
router.use('/signup', userRoutes);

module.exports = router;

