const router = require('express').Router();

const gameRoutes = require('./game-routes.js');

router.use('/games', gameRoutes);

module.exports = router;