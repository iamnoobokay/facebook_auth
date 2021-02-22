const passport = require("passport");
require("dotenv").config();
const strategy = require('passport-facebook')

// import userModel from "../user/user.model";

const FacebookStrategy = strategy.Strategy;

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

passport.use(
  new FacebookStrategy(
    {
      clientID: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      callbackURL: process.env.FACEBOOK_CALLBACK_URL,
      profileFields: ["email", "name"]
    },
    function(accessToken, refreshToken, profile, done) {
      const userData = {
        email,
        firstName: first_name,
        lastName: last_name
      };
    //   new userModel(userData).save()
    console.log(userData);
    done(null, profile);
    }
  )
);