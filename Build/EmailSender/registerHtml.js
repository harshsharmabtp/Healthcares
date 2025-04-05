exports.registerEmail = (first_name) => {
    return `
<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome Email</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        font-family: 'Helvetica', 'Arial', sans-serif;
        background-color: #f3f3f3;
        color: #ffffff;
      }
      .email-container {
        max-width: 600px;
        margin: 40px auto;
        background-color: #e7e2e2;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
      }
      .header {
        background-color: #042f6e; /* Dark blue */
        color: #ffffff;
        text-align: center;
        padding: 25px;
      }
      .header h1 {
        margin: 0;
        font-size: 28px;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 1px;
      }
      .content {
        background: linear-gradient(to right, #520509, #837b0a);; /* Black background */
        padding: 30px;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 17px;
        font-style: italic;
        line-height: 1.8;
        text-align: left;
        color: white /* Light gray text for readability */
      }
      .content p {
        margin: 0 0 20px;
      }
      .button-container {
        text-align: center;
        margin: 30px 0;
        color:white
      }
      .button {
        background-color: #12438d; /* Dark blue */
        color: #fff6f6;
        text-decoration: none;
        padding: 14px 30px;
        border-radius: 25px;
        font-size: 16px;
        font-weight: bold;
        text-transform: uppercase;
        transition: background-color 0.3s ease;
        display: inline-block;
      }
      .button:hover {
        background-color: #051c3f; /* Darker blue for hover effect */
      }
      .footer {
        background-color: #042455; /* Dark blue */
        text-align: center;
        padding: 20px;
        font-size: 14px;
        color: #cccccc;
      }
      .footer a {
        color: #bbdefb; /* Light blue */
        text-decoration: none;
      }
      .footer a:hover {
        text-decoration: underline;
      }
    </style>
  </head>
  <body>
    <div class="email-container">
      <div class="header">
        <h1>Thanks For Registering With Us</h1>
      </div>
      <div class="content">
        <p>Hi ${first_name},</p>
        <p>We’re thrilled to have you with us! Your account has been successfully registered, and you’re all set to explore everything we offer.</p>
        <p>To confirm your email address and activate your account, click the button below:</p>
        <div class="button-container">
          <a href="https://example.com/verify" class="button">Verify Your Email</a>
        </div>
        <p>If you didn’t sign up for this account, please ignore this email or contact our support team.</p>
        <p>Thank you, and we look forward to seeing you soon!</p>
        <p>Warm regards,</p>
        <p><strong>Harsh Sharma</strong></p>
      </div>
      <div class="footer">
        <p>&copy; 2025 Healthcare India. All rights reserved.</p>
        <p><a href="https://example.com/terms">Terms of Service</a> | <a href="https://example.com/privacy">Privacy Policy</a></p>
      </div>
    </div>
  </body>
  </html>
    `;
  };
  