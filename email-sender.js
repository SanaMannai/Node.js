
const nodemailer = require('nodemailer');

require('dotevn').config();

let transporter = nodemailer.createTransport({
  service: 'gmail',
  // port: ,
  auth: {
    user: process.env.Email,
    pass: process.env.Cle
  },
});

let mailOptions = {
  from: 'mannaisana941@gmail.com',
  to: 'hanatalbi87@gmail.com',
  subject: 'Test Email from Node.js',
  text: 'This is a test email sent from Node.js using nodemailer.',
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
