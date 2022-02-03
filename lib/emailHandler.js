const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
      pass: process.env.NEXT_PUBLIC_PASSWORD
    }
});

const mailOptions = {
    from: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
    to: process.env.NEXT_PUBLIC_EMAIL_TARGET,
    subject: 'Sending email using Node.js',
    text: 'Easy peasy lemon squeezy'
};

const sendEmail = () => {
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            return false
        } else {
            console.log('Email sent: ' + info.response);
            return true
        }
    });
}

module.exports = {sendEmail}