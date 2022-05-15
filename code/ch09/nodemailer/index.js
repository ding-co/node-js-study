const nodemailer = require('nodemailer');

const config = {
  service: 'gmail',
  host: 'smtp@gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.GOOGLE_MAIL,
    pass: process.env.GOOGLE_PASSWORD,
  },
};

const send = async (data) => {
  const transporter = nodemailer.createTransport(config);
  transporter.sendMail(data, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      return info.response;
    }
  });
};

const sendDemo = async (data) => {
  var transport = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: 'c38e08189dac19',
      pass: 'af05e5678d29c2',
    },
  });
  transport.sendMail(data, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      return info.response;
    }
  });
};

module.exports = { send, sendDemo };