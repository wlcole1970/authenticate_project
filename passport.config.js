const localStrategy = require('passport-local').Strategy;

function initialize(passport) {
    const authenticateUser = (email, password, done) => {

    };
    passport.use(new localStrategy({
        usernameField: 'email'
    }), authenticateUser);
    passport.serializeUser((user, done) => {});
    passport.deserializeUser((id, done) => {});

}