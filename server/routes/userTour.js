const express = require("express");
const router = express.Router();

// const {getallTour}= require('../controller/Admin_booking');
const {findToursByQuery,createBooking,cancelBooking}= require('../controller/booking')


router
.get("/",findToursByQuery);


router
.post('/',createBooking);

router
.get('/:id',cancelBooking)





module.exports= router