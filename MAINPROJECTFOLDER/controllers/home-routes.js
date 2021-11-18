const router = require('express').Router();
const { Game } = require('../models');

router.get('/', async (req, res) => {
    try{
        const gameData = await Game.findAll();

        const games = gameData.map((game) => game.get({ plain: true}));

        res.render('homepage', {
            games,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;