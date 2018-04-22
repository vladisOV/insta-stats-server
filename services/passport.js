const passport = require("passport");
const InstagramStrategy = require("passport-instagram").Strategy;
const keys = require("../config/keys");

passport.use(
  new InstagramStrategy(
    {
      clientID: keys.instaClientID,
      clientSecret: keys.instaClientSecret,
      callbackURL: "/auth/instagram/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      console.log(profile);
      console.log(accessToken);
    }
  )
);
