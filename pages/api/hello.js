// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  console.log("body", req.body)

  const transporter = nodemailer.createTransport({
    port: 465,
    service: 'smtp.gmail.com',
    secure: true,
    auth: {
      secure: true,
      user: process.env.NEXT_PUBLIC_EMAIL_USERNAME,
      pass: process.env.NEXT_PUBLIC_PASSWORD
    },
  });

  console.log(process.env.NEXT_PUBLIC_EMAIL_USERNAME)
  let mailOptions = {
    from: 'example@gmail.com',
    to: 'alfauzansepta@gmail.com',
    subject: 'Sending email using Node.js',
    text: 'Easy peasy lemon squeezy'
  };

  try {
    const email = await transporter.sendMail(mailOptions);
    console.log(email.messageId)
    res.status(200).json({ email: messageId })
  } catch (error) {
    console.log("error", error)
    res.status(200).json({ error: error })
  }

  res.status(200).json({ name: 'John Doe' })
}
