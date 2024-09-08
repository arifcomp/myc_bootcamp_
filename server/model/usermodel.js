const mongoose = require("mongoose");


const userModel = new mongoose.Schema ({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    },

    role:{
        type:String,
        enum:["admin","user"],
        default:"user"
    },
    address:{
        street:{type:String},
        city:{type:String},
        state:{type:String},
        zip:{type:String}
    }
},{timestamps:true});

const user = mongoose.model("UserModel",userModel);

module.exports= user;




