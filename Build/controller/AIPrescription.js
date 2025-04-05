// const mongoose = require('mongoose');

// const Prescription = require('../models/AIPrescription')


// const AIPrescription = async(req,res)=>{


//     try {
        
//        const result = await Prescription.find();
//        return res.status(201).json({message:"Data Fetched Successfully",result});


//     } catch (error) {
        
//         return res.status(400).json({message:"Can'nt Get Prescription Data",error:error.message})
//     }
// }

// module.exports = {AIPrescription};

const Prescription = require("../models/AIPrescription");

const AIPrescription = async(req,res)=>{

    try {
        const symptomsQuery = req.query.symptoms;

        if (!symptomsQuery) {
            return res.status(400).send("<h3>Please enter symptoms</h3>");
        }

        // Search for prescriptions where symptoms match the input
        const prescriptions = await Prescription.find({
            SymptomsMatched: { $regex: symptomsQuery, $options: "i" } // Case-insensitive search
        });

        if (prescriptions.length === 0) {
            return res.send("<h3>No matching prescriptions found</h3>");
        }

        // Create an HTML table dynamically
        let tableHtml = `
            <html>
            <head>
                <style>
                    body { font-family: Arial, sans-serif; padding: 20px; }
                    table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                    th, td { padding: 10px; text-align: left; border-bottom: 1px solid #ddd; }
                    th { background-color: #00796b; color: white; }
                    tr:hover { background-color: #f1f1f1; }
                </style>
            </head>
            <body>
                <h2>Matching Prescriptions</h2>
                <table>
                    <tr>
                        <th>Disease Name</th>
                        <th>Symptoms</th>
                        <th>Possible Cause</th>
                        <th>Recommended Tests</th>
                        <th>Prescription</th>
                        <th>Home Remedies</th>
                        <th>Doctor Specialization</th>
                    </tr>`;

        prescriptions.forEach(prescription => {
            tableHtml += `
                <tr>
                    <td>${prescription.DiseaseName}</td>
                    <td>${prescription.SymptomsMatched}</td>
                    <td>${prescription.PossibleCause}</td>
                    <td>${prescription.RecommendedTests}</td>
                    <td>${prescription.Prescription}</td>
                    <td>${prescription.HomeRemedies}</td>
                    <td>${prescription.DoctorSpecialization}</td>
                </tr>`;
        });

        tableHtml += `</table></body></html>`;
        res.send(tableHtml); // Send table as HTML response

    } catch (error) {
        res.status(500).send("<h3>Error fetching data</h3>");
    }
};

module.exports = {AIPrescription};
