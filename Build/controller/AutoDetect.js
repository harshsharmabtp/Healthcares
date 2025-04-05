const mongoose = require('mongoose');
const Auto = require('../models/AutoDetectDisease')


const detect = async(req,res)=>{

    try {
        
        const {PatientName,PatientAge,Symptoms,Contact} = req.body;
        const user = new Auto({

            PatientName,PatientAge,Symptoms,Contact
        })
        const result = await user.save();

        return res.status(200).json({message:"Your Data Has been Saved Successfully",result})

    } catch (error) {

        return res.status(401).json({message:"Your Data Has Not been Saved",error:error.message});
    }

}


module.exports = {detect};
