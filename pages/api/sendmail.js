import { sendMail } from "../../lib/emailHandler"
import nodemailer from 'nodemailer'

export default function handler(req, res) {

    const transporter = nodemailer.createTransport({
        // port: 465,
        service: 'smtp.mailtrap.io',
        auth: {
            secure: true,
            user: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
            pass: process.env.NEXT_PUBLIC_PASSWORD
        },
    });

    const mailOptions = {
        from: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
        to: process.env.NEXT_PUBLIC_EMAIL_TARGET,
        subject: 'Sending email using Node.js',
        text: 'Easy peasy lemon squeezy'
    };

    
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            res.status(200).json({ message: 'email not sent' })
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).json({ message: 'email sent' })
        }
    });
}