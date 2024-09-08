const express = require("express");
const router = express.Router();
const {AdminPostTour,getallTour, getTourBYID,editTour,deleteTour}= require('../controller/Admin_booking')
router
.route('/')
.post(AdminPostTour)
.get(getallTour)

router
.route("/:id")
.get( getTourBYID)
.patch(editTour)
.delete(deleteTour)






module.exports =router;