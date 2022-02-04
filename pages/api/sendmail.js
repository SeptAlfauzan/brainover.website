import { sendMail } from "../../lib/emailHandler"
import nodemailer from 'nodemailer'
import StreamTransport from "nodemailer/lib/stream-transport";

export default function handler(req, res) {
    try{
    let transporter = nodemailer.createTransport({
        // port: 2525,
        service: 'smtp.mailtrap.io',
        auth: {
            secure: true,
            user: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
            pass: process.env.NEXT_PUBLIC_PASSWORD
        },
    });

    let mailOptions = {
        from: 'example@gmail.com',
        to: 'alfauzansepta@gmail.com',
        subject: 'Sending email using Node.js',
        text: 'Easy peasy lemon squeezy'
    };

    transporter.sendMail(mailOptions);
    res.status(200);
    }
    catch(error){
    	res.status(400);
    }
    // transporter.sendMail(mailOptions, function(error, info){
    //     if (error) {
    //         console.log(error);
    //         res.status(200).json({ message: 'email not sent' })
    //     } else {
    //         console.log('Email sent: ' + info.response);
    //         res.status(200).json({ message: 'email sent' })
    //     }
    // });
    res.status(200).json({ message: 'email sent' })
}