const mongoose = require("mongoose");

const booking= new mongoose.Schema({
    userID:{type:String},
    tourPacakgeID:{type:String},
    status:{
        type:String,
        enum:["camcelled","pending","booked"],
        default:"pending"
    },
    bookingDate:{
        type:String
    }
},{timestamps:true});

const book = mongoose.model('booking-pacakge',booking);
module.exports =book;
