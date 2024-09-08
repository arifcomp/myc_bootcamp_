const mongoose = require("mongoose");

const tour = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    location:{
        type:String,
        require:true
    },
    tourType:{
        type:String,
        require:true
    },
    price:{ 
        type:String,
        require:true
    },
    description:{
        type:String
    },
    itinerary:[{
        day:{type:Number},
        description:{type:String}
    }],

    

},{timestamps:true})

const pack = mongoose.model("TOUR-Package-Model",tour);
module.exports =pack