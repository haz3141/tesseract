const router = require("express").Router();
const path = require("path");
const connectEnsureLogin = require("connect-ensure-login");
const passport = require("passport");
const { json } = require("express");

router.post("/upload", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;

  file.mv(path.join(__dirname, "../../client/public/uploads", file.name), (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});

module.exports = router;
