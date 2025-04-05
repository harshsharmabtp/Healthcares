const user = require('../models/PatientData');  // No need to import mongoose

const Prequest = async (req, res) => {
    try {
        // Directly using req.body instead of destructuring (since it's not used)
        const myuser = new user(req.body);
        const result = await myuser.save();

        return res.status(200).json({
            message: "Patient Appointment has been saved Successfully",
            result
        });
    } catch (error) {
        return res.status(500).json({  // Changed status to 500 for server error
            message: "Patient Data Cannot be processed",
            error: error.message  // Sends only the error message for security
        });
    }
};

module.exports = { Prequest };
