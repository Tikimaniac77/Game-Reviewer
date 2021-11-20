const router = require('express').Router();
const userRoutes = require('./userRoutes');
const gameRoutes = require('./game-routes.js');

router.use('/users', userRoutes);
router.use('/games', gameRoutes);


module.exports = router;