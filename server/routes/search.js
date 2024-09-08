const express = require("express");
const router = express.Router();
const {seeRegistersdUser,seeUserByemail}=require('../controller/registerControl')
router
.route('/:id')
.get(seeUserByemail)

router.get("/",seeRegistersdUser);

module.exports = router