const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const Myambu = require('../models/ambBooking');

exports.ambicane = async (req, res) => {
    try {
        console.log("Received Booking Data:", req.body);

        const { PatientName, Cause, PickupLocation, PatientCondition, Contact } = req.body;

        if (!PatientName || !Cause || !PickupLocation || !PatientCondition || !Contact) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        // Save patient details in MongoDB
        const newAppointment = new Myambu({
            PatientName, Cause, PickupLocation, PatientCondition, Contact
        });

        await newAppointment.save();
        console.log("Patient Appointment saved successfully");

        // **Stripe Debugging**
        console.log("Checking Stripe Secret Key:", process.env.STRIPE_SECRET_KEY ? "Loaded" : "Not Loaded");

        // Create Stripe Checkout Session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: "Ambulance Service",
                            description: `Ambulance Booking for ${PatientName}`,
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

        console.log("Stripe Payment URL:", session.url);
        
        return res.json({ 
            success: true, 
            message: "Patient Appointment has been saved Successfully", 
            url: session.url 
        });

    } catch (error) {
        console.error("Error booking appointment:", error);
        return res.status(500).json({ success: false, message: "Failed to book appointment", error: error.message });
    }
};
