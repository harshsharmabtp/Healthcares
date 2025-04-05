const jwt = require('jsonwebtoken')
const admin = require('../models/schema')

const verification = async(req,res,next)=>{
    try {
    
        const token = req.cookies.jwt 
        if(!token){
            
            res.status(200).json({message:"Token Not Found"})
        }

        const check = await jwt.verify(token,process.env.SecretKey)
        const info = await admin.findOne({_id:check.id})
    
        if(!info){
    
            res.status(200).json({message:"Admin Not Found"})
        }
    
        req.info = info
        req.token = token
        


        next()

    } catch (error) {
        
        res.status(500).json({message:"Token Expired", error: error.name})
    }
}

module.exports = verification