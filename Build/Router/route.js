const express = require('express');
const router = express.Router();
const { register, login, logout } = require('../controller/auth');
const verification = require('../Middleware/middleware');
const path = require('path');
const { Prequest } = require('../controller/payment'); 
const {ambu,search} = require('../controller/ambulance')
const {detect} = require('../controller/AutoDetect')
const {ambicane} = require('../controller/ambBooking')
const {AIPrescription} = require('../controller/AIPrescription')
const {sampark} = require('../controller/contact')

// Success and Failure Pages
router.get('/complete', (req, res) => {
    res.render('complete');  
});
router.get('/cancel', (req, res) => {
    res.send('Payment Failed');
});

// Authentication Routes
router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout, verification);

// Appointment & Payment Route
router.post('/PatientAppointmentData', Prequest);  // This now handles both saving & Stripe
router.post('/ambubooks',ambicane)

router.get('/ambulanceData',ambu)
router.get('/ambusearch',search)
router.get('/AiPrescribed',AIPrescription)

router.post('/autodetect',detect)

router.post('/ambulbook',ambicane)

router.post('/contactUs',sampark)




module.exports = router;