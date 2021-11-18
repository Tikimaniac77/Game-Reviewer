const router = require('express').Router();
const passport = require('passport');

// Auth Login
router.get('login', (req, res) => {
    res.render('login');
})

router.get('/logout', (req, res) => {
    res.send('logging out');
})

router.get("/google", passport.authenticate("google", {
    scope: ["profile"]
}));

// Callback route for google redirect
router.get('/google/redirect', (req, res) => {

});

module.exports = router;