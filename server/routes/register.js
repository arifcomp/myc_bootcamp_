const express = require("express");
const router = express.Router();

const usrFucn=require("../controller/registerControl")

router
.route("/")
.post(usrFucn.registerUser)
.get(usrFucn.seeRegistersdUser)




module.exports = router