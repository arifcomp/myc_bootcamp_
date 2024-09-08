const pack = require('../model/TourPackage')

/*
crud operations by Admin
*/
//post a tour


const AdminPostTour = async (req,res)=>{
    try{
        const body = req.body
        if(!body) return res.status(400).json({msg:"no body given"})

        const newuser =  new pack(body)  
        newuser.save()
    .then(user=> res.status(201).json(user))

    }catch(err){
        res.status(500).json(err);
    }
        
        
}
// get all tours 
const getallTour =async(req,res)=>{
    const data = await pack.find();
    if(!data) return res.json({status:"no data present"})
    return res.status(200).json(data)
}

//edit a tour by id

const editTour = async (req,res)=>{
 const uid= req.params.id
    const data = await pack.findByIdAndUpdate(uid,req.body)
    if(!data) return res.json({status:"no data present"})
    return res.status(200).json({status:"tour edited"})
}
// get  tour by id 
const getTourBYID = async (req,res)=>{
    const uid=  req.params.id

     const data = await pack.findById(uid)
       if(!data) return res.json({status:"no data present"})
       return res.status(200).json(data)
   }
   //admin del tour
const deleteTour = async (req,res)=>{
    const uid=  req.params.id

     const data = await pack.findByIdAndDelete(uid)
       if(!data) return res.json({status:"no data present"})
       return res.status(200).json({status:"deleted"})
}




module.exports ={
    AdminPostTour,
    getallTour,
    editTour,
    getTourBYID,
    deleteTour
}