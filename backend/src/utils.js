const transporter = require("./configs/mail");
require("dotenv").config();

const sendMail = async (user) => {
  await transporter.sendMail({
    from: `Monu Mishra 👻<${process.env.gmail_id}`,
    to: user.email,
    subject: `Welcome to Ekart ${user.fullName}`,
    text: `Hi ${user.fullName}, Please confirm your email address by clicking on following link
    link - ${process.env.Deployed_link}`,
  });
};

const sendOTP = async (user, OTP) => {
  await transporter.sendMail({
    from: `Monu Mishra 👻<${process.env.gmail_id}`,
    to: user.email,
    subject: `Ekart : Payment OTP`,
    text: `Hi ${user.fullName}, Your OTP for Payment is ${OTP}`,
  });
};

const sendMailToAdmins = async (user) => {
  await transporter.sendMail({
    from: `Monu Mishra 👻 <${process.env.gmail_id}>`,
    to: `${process.env.gmail_id}`,
    subject: `${user.fullName} has registered with us`,
    text: `Please welcome ${user.fullName}`,
  });
};

module.exports = { sendMail, sendMailToAdmins, sendOTP };
