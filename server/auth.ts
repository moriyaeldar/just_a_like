// const passport = require('passport');
import passport from 'passport';
const GoogleStrategy = require('passport-google-oauth2').Strategy;

passport.use(new GoogleStrategy({
    clientId: process.env.GOOGLE_AUTH_CLIENT_ID,
    clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET,
},
function (request, accessToken, refreshToken, profile, done) {
    return done(profile);
}
));


passport.serializeUser(function(user, done) => {
    done(null, user)
});

passport.deserializeUser(function(user, done) => {
    done(null, user);
});