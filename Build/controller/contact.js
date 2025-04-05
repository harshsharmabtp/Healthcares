const mongoose = require('mongoose');
const Cntc = require('../models/contact');

const sampark = async (req, res) => {
    try {
        const { Name, Email, Contact, Query } = req.body;

        // Corrected way of creating a new document
        const user = new Cntc({ Name, Email, Contact, Query });

        // Saving the document
        const result = await user.save();

        return res.status(201).json({ message: "Query Processed Successfully", result });

    } catch (error) {
        res.status(400).json({ message: "Query Can't be submitted Successfully", error: error.message });
    }
};

module.exports = { sampark };
