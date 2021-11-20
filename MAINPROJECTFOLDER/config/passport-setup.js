const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
require('dotenv').config

passport.use(
new GoogleStrategy({
    // TODO ID and Secret for GoogleStrat
    clientID: process.env.GOOGLE_CLIENTID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/redirect",
}, (tokencodeURI, tokenSecret, profile, done) => {
    // TODO: Passport Callback Function
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return done(err, user);
})
}));

module.exports = passport;