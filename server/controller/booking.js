const pack = require('../model/TourPackage')
const book = require("../model/booking");


//find on the basis of query parameter
const findToursByQuery = async (req, res) => {
    const location =req.query.location;
    const tourType = req.query.tourType;
     const obj={};
    if(location){obj.location=location}
     if(tourType){obj.tourType=tourType}

     //find data 
     const data = await pack.find(obj)
     if(!data) return res.json({msg:"no data found"})
     return res.status(200).json(data);
 };


// creare user by booking
const createBooking =async(req,res)=>{

   try{ const body = req.body
    const data = new book(body)
    data.save()
    .then(user=>res.status(201).json(user));
}catch(err){

}

}


// cancel the booking
const cancelBooking= async(req,res)=>{
   const uid = req.params.id
   const entry = await book.findByIdAndUpdate(uid,{status:"cancel"})
   if(!entry) return res.json({msg:"no data found"})
    return res.status(200).json({status:"booking cancelled"});
}



  module.exports = {findToursByQuery,createBooking,cancelBooking}