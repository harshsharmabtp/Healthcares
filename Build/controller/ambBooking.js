const Myambu = require('../models/ambBooking');

const ambicane = async(req,res)=>{

    try {
        
        const {PatientName,Cause,PickupLocation,PatientCondition,Contact} = req.body;


        const user = new Myambu({

            PatientName,Cause,PickupLocation,PatientCondition,Contact,
        })


        const result = await user.save();
        
        return res.status(201).json({message:"Ambulance Booked Successfully",result})

        
    } catch (error) {
        

        return res.status(400).json({message:"Ambulance Booking Not be Processed",error:error.message})
    }
}


module.exports = {ambicane}