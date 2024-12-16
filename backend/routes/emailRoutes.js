const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

// Route to handle sending emails
router.post('/send', async (req, res) => {
    const { first_name, last_Name, email, message } = req.body;

    // Nodemailer setup
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: "Thank you for contacting us!",
        text: `Hi ${last_Name} ${first_name}, \n\nThank you for your message: "${message}".\n\nBest regards, \nYour Team`,
    };
    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Filed to send email.' });
    }
});

module.exports = router;