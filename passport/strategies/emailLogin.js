const db = require("../../users/userModel");
const bcrypt = require("bcrypt");
const passport = require("passport");
const Strategy = require("passport-local").Strategy;

passport.use(
  "email-login",
  new Strategy({ usernameField: "email" }, function(email, password, verify) {
    db.findByEmail(email)
      .then((user) => {
        if (!user) {
          return verify(null, false, { message: "That email and password combination is incorrect."});
        }
        if (!bcrypt.compareSync(password, user.password)) {
          return verify(null, false, { message: "That email and password combination is incorrect."});
        }
        return verify(null, user);
      })
      .catch((err) => {
        return verify(err);
      });
  })
);
