const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const dataFile = path.join(__dirname, 'passwordResetRequests.json');

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
    host: 'smtp.example.com', 
    port: 587,
    secure: false, // Use TLS
    auth: {
        user: 'your-email@example.com',
        pass: 'your-password'
    }
});

app.post('/api/reset-password', async (req, res) => {
    const { email } = req.body;

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
        return res.status(400).json({ message: 'Invalid email address' });
    }
    let data = [];
    try {
        const fileContent = fs.readFileSync(dataFile, 'utf8');
        data = JSON.parse(fileContent);
    } catch (error) {

    }
    data.push({
        email,
        requestedAt: new Date().toISOString()
    });

    // Write updated data back to file
    fs.writeFileSync(dataFile, JSON.stringify(data, null, 2));

    const resetToken = Math.random().toString(36).substr(2, 10);
    try {
        await transporter.sendMail({
            from: '"Cape Sunny Energy" <noreply.caspesunny@protomail.com>',
            to: email,
            subject: "Password Reset Request",
            text: `You have requested to reset your password. Please use the following token to reset your password: ${resetToken}`,
            html: `<p>You have requested to reset your password. Please use the following token to reset your password:
            </p><p><strong>${resetToken}</strong></p>`
        });

        res.json({ message: 'Password reset email sent' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Error sending password reset email' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});