const passport = require("passport");

module.exports = app => {
  app.get("/auth/instagram", passport.authenticate("instagram"));

  app.get("/auth/instagram/callback", passport.authenticate("instagram"));

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send();
  });
};
