const passport = require("passport");

module.exports = app => {
  app.get("/auth/instagram", passport.authenticate("instagram"));

  app.get("/auth/instagram/callback", passport.authenticate("instagram"));

  app.get("/api/logout", (req, res) => {
    req.logout();
    res.send();
  });

  app.use("/current_user", (req, res, next) => {
    if (!req.user) {
      res.redirect("/");
    }
    next();
  });
  app.get("/current_user", (req, res) => {
    res.json(req.user);
  });
};
