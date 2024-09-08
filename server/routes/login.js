const express = require("express");
const loginfun=require("../controller/loginController");
const router = express.Router();

router
.route("/")
.post(loginfun.chechUserValid)


module.exports = router;
