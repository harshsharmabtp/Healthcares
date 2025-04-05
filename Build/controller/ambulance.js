const mongoose = require('mongoose');
const Ambulance = require('../models/ambulance')

const ambu = async(req,res)=>{

    try {
        
        const result = await Ambulance.find();
    } catch (error) {
        
        res.staus(400).json({message:"Ambulance Not Available",error})
    }
}

const search =  async(req,res)=>{

    try {
        const searchText = req.query.q;
        const ambulances = await Ambulance.find({
            $or: [
                { registrationNumber: { $regex: searchText, $options: "i" } }, // Case-insensitive search
                { facilities: { $regex: searchText, $options: "i" } },
            ],
        });
        res.json(ambulances);
    } catch (error) {
        
        return res.status(400).json({message:"Error in searching the ambulances",error})
    }
}
module.exports = {ambu,search};