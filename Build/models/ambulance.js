const mongoose = require('mongoose');


const AmbulanceSchema = new mongoose.Schema({
    registrationNumber: String,
    facilities: [String],
    distanceFromPatient: Number,
    charges: Number,
    available: Boolean
});

const Ambulance = mongoose.model("Ambulance", AmbulanceSchema);

module.exports = Ambulance;