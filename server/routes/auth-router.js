const router = require("express").Router();
const connectEnsureLogin = require("connect-ensure-login");
const passport = require("passport");

router.post("/login", (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err);
    }

    if (!user) {
      return res.redirect("/login?info=" + info);
    }

    req.logIn(user, function (err) {
      if (err) {
        return next(err);
      }

      return res.send("Logged In");
    });
  })(req, res, next);
});

router.get("/login", (req, res) => res.send("Hello!"));

router.get("/", connectEnsureLogin.ensureLoggedIn(), (req, res) =>
  res.send("Ensured")
);

router.get("/private", connectEnsureLogin.ensureLoggedIn(), (req, res) =>
  res.send("Hello!")
);

router.get("/user", connectEnsureLogin.ensureLoggedIn(), (req, res) =>
  res.send({ user: req.user })
);

module.exports = router;
