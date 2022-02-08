// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const nodemailer = require('nodemailer');
export default async function handler(req, res) {
  console.log("body", req.body)
  const transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    secure: false,
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
      pass: process.env.NEXT_PUBLIC_PASSWORD
    },
    debug: true,
    logger: true,
  });

  console.log(process.env.NEXT_PUBLIC_PASSWORD)
  let mailOptions = {
    from: '"Example Team" <from@example.com>',
    to: 'alfauzansepta@gmail.com',
    subject: 'Sending email using Node.js',
    text: 'Easy peasy lemon squeezy'
  };

  transporter.verify((err, success) => {
    if(err) console.log('check error ', err)
    console.log('config is correct!')
  });

  const email = await transporter.sendMail(mailOptions, (err, info) => {
    if(err) return console.log(err)
    res.status(200).json({ email: messageId })
    
  });
  res.end()
}
