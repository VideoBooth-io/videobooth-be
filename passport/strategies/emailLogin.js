const db = require("../../users/userModel");
const bcrypt = require("bcrypt");
const passport = require("passport");
const Strategy = require("passport-local").Strategy;

passport.use(
  "email-login",
  new Strategy({ usernameField: "email" }, function(email, password, verify) {
    db.findByEmail(email)
      .then((user) => {
        console.log("passporto user", user)
        if (!user) {
          return verify(null, false, { message: "That email and password combination is incorrect."});
        }
        if (!bcrypt.compareSync(password, user.password)) {
          return verify(null, false, { message: "That email and password combination is incorrect."});
        }
        return verify(null, user);
      })
      .catch((err) => {
        console.log("passporto error", err)
        return verify(err);
      });
  })
);
