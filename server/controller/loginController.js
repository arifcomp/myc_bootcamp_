const user = require("../model/usermodel");
// checks if the user for log in
const chechUserValid = async (req,res)=>{
    try{
        const email = req.body.email
        const password =req.body.password
        const entry = await user.findOne({email:email})
        if(!entry) return res.json({msg:"user doses not exist"})
        if(password===entry.password){
            return res.status(200).json({status:"login succesful"})
        }else{
            return res.json({status:"wrong password"})
        }

    }catch(err){
        return res.status(500).json(err)
    }
    
}
module.exports ={chechUserValid}