const user = require("../model/usermodel");


//post request on /api/register/
const registerUser  = async (req,res)=>{
    try{
    const body = req.body;
    if(!body) return res.status(400).json({msg:"no body given"})
        
    if(await user.findOne({email:body.email})){
           return res.json({msg:"u have already registered"})
        }

    
    const newuser =  new user(body)  
    newuser.save()
    .then(user=> res.status(201).json({meg:"user Created"}))
    }catch(err){
        res.status(500).json(err);
    }
}
/* gives all users */
const seeRegistersdUser=  async (req,res)=>{
    const data = await user.find();
    if(!data) return res.json({msg:"no data found"})
    return res.status(200).json(data);
}
/* gives  users by email */
const seeUserByemail = async (req,res) =>{
    const body = req.body;
    const data = await user.findOne({email:body.email})
    if(!data) return res.json({msg:"no data found"})
    return res.status(200).json(data);
}



module.exports={
    registerUser,
    seeRegistersdUser,
    seeUserByemail,
}