const router = require('express').Router();
const { Game } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/platform', withAuth, async (req, res) => {
    try {
        const newGame = await Game.create({
            ...req.body,
            userID: req.session.userID,
        });
        res.status(200).json(newGame);
        //console.log(newGame);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;