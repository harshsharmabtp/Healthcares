const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);  // Add your Stripe secret key
const PatientAppointmentModel = require('../models/PatientData');

exports.Prequest = async (req, res) => {
    try {
        const { PatientName, Age, Contact, Symptoms, Duration, HospitalName, DoctorName, Specialization, Date, BloodGroup } = req.body;

        // Save patient details in MongoDB
        const newAppointment = new PatientAppointmentModel({
            PatientName, Age, Contact, Symptoms, Duration, HospitalName, DoctorName, Specialization, Date, BloodGroup
        });

        await newAppointment.save();

        console.log("Patient Appointment saved successfully");

        // Create Stripe Checkout Session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: `Doctor Appointment with ${DoctorName} at ${HospitalName}`,
                        },
                        unit_amount: 5000,  // $50
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `http://localhost:3000/complete`,
            cancel_url: `http://localhost:3000/cancel`,
        });

        return res.json({ 
            success: true, 
            message: "Patient Appointment has been saved Successfully", 
            url: session.url 
        });

    } catch (error) {
        console.error("Error booking appointment:", error);
        return res.status(500).json({ success: false, message: "Failed to book appointment" });
    }
};
