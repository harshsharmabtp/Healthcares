const nodemailer = require("nodemailer");
const { registerEmail } = require("./registerHtml");

// Create the transporter
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use TLS
  auth: {
    user: "harsh.6692rp@gmail.com", // Your Gmail address
    pass: "egvzcmbkkmxayuuc", // Your Gmail App Password
  },
});

// Define the sendMail function
async function sendMail(to, subject, username) {
  try {

    const htmlContent = registerEmail(username);
    const info = await transporter.sendMail({
      from: '"Your Company" <harsh.6692rp@gmail.com>', // Sender address
      to: to, // Recipient email (dynamic)
      subject: subject, // Subject line
      html: htmlContent, // HTML body
    });
    console.log("Message sent: %s", info.messageId); // Log success
    console.log("Sending email to:", to); // Log the email address
  } catch (error) {
    console.error("Error sending email:", error.message); // Log errors
  }
}

module.exports = { sendMail };
