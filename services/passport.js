const passport = require("passport");
const InstagramStrategy = require("passport-instagram").Strategy;
const keys = require("../config/keys");

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

passport.use(
  new InstagramStrategy(
    {
      clientID: keys.instaClientID,
      clientSecret: keys.instaClientSecret,
      callbackURL: "/auth/instagram/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      const user = {
        token: accessToken
      };
      done(null, user);
    }
  )
);
