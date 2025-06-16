const express = require("express");

const userActions = require("../controllers/user-actions");

const router = express.Router();

router.post("/signup", userActions.createUser);

router.post("/login", userActions.verifyUser);

router.get("/logs", userActions.getLogs);

router.get("/", (req, res, next) => {
  res.send("Hello from users-api");
});

module.exports = router;
