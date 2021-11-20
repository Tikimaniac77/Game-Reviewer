const router = require('express').Router();
const { Game } = require('../../models');
const withAuth = require('../../utils/auth');

const gameData = [];

function getAPI(event) {
    event.preventDefault();
    const rawgAPI = 'https://api.rawg.io/api/games?page_size=10&key=b39e2fb9778043c4bb30436ea2bc858c'

    fetch(rawgAPI)
        .then(function (response){
            console.log(response.status);
            return response.json();
        })
        .then(function(data){
            console.log(data);
            gameData.push(data);
        })
};

router.post('/', withAuth, async (req, res) => {
    try {
        const newGame = await Game.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newGame);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;