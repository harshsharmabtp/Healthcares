const mongoose = require('mongoose');

const cntSchema = new mongoose.Schema({
    Name: {
        type: String,  // `type` should come first
        required: true // Fix: Corrected `require` to `required`
    },
    Email: {
        type: String,
        required: true
    },
    Contact: {
        type: String,
        required: true
    },
    Query: {
        type: String,
        required: true
    }
});

// Corrected: Use `cntSchema` instead of `cnt`
const Cntc = mongoose.model('Cntc', cntSchema);

module.exports = Cntc;
