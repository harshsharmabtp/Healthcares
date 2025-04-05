const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const admin = require('../models/schema')
const { sendMail } = require('../EmailSender/sendmail');

const register = async (req, res) => {
    try {
        const { first_name, last_name, email, password, contact } = req.body;

        // Check if email already exists in the database
        const EmailExists = await admin.findOne({ email });

        if (EmailExists) {
            // Respond with status 409 (Conflict) and a JSON message
            return res.status(409).json({ message: "Email is already registered" });
        }

        // Hash the password before saving to the database
        const saltround = 10;
        const hashing = await bcrypt.hash(password, saltround);

        // Create the new user
        const UserRegister = await admin.create({ first_name, last_name, email, password: hashing, contact });

        sendMail(email,"Welcome to our website","",registerEmail(first_name))

        // Create JWT token
        const token = jwt.sign({ id: UserRegister._id }, process.env.SecretKey, { expiresIn: "1500000000h" });

        // Send cookie with the token
        res.cookie('jwt', token, { httpOnly: true, secure: true, maxAge: 670000 });

        // Return JSON response with status 201 (Created)
        res.status(201).json({ message: "Registration successful" });

    } catch (error) {
        // Return error message in JSON format
        return res.status(400).json({ message: error.message });
    }
};



const login = async(req,res)=>{


    try {
        
    const {email,password} = req.body

    const EmailExists = await admin.findOne({email})

    if(!EmailExists){

        return res.status(200).json({message:"Please Register Yourself"})
    }

    const valid = await bcrypt.compare(password,EmailExists.password)

    if(!valid){

        return res.status(202).json({message:"Invalid Login Credentials"})
    }

    const token = jwt.sign({id:EmailExists._id},process.env.SecretKey,{expiresIn:"15000000000h"})
    res.cookie('jwt',token,{httpOnly:true,secure:false,maxAge:670000})
    res.status(201).json({message:"Login Successfull"})

    } catch (error) {
        
        res.status(400).json({message:error.message})
    }

    
}

const logout = async(req,res)=>{


    try {
        
        res.clearCookie('jwt',{httpOnly:true,secure:false,maxAge:670000})
        res.status(200).json({message:"Logout Successfull"})

    } catch (error) {
        
        res.status(400).json({message:error.message})
    }
}
// Email content templates
const registerEmail = (first_name) => `
  <h1>Welcome to Our Website, ${first_name}!</h1>
  <p>Thank you for registering. We are thrilled to have you on board!</p>
`;

const loginEmail = (name) => `
  <h1>Hello, ${name}!</h1>
  <p>We noticed a login to your account. If this wasn't you, please secure your account immediately.</p>
`;

module.exports = {register,login,logout}