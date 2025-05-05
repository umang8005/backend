const express = require("express");
const router1 = new express.Router();
const nodemailer = require("nodemailer");

// send mail
router1.post("/mail", (req, res) => {
  const { email, name, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: "Sending Email For Contact Us",
      html: `
         <table style="width:45%; background-color: #defaf5; padding-left:20px; padding-right:20px; padding-bottom:20px; font-size: 15px;  border-radius: 5px;">  
         <h2>Contact Details</h2>
        <tr>
          <td style="width:40%;">Name</td>
          <td style="color: #6E7074; float:right;">${name}</td>
          </tr>
          <td style="padding-top:5px; padding-bottom:5px">Email</td>
          <td style="color: #6E7074; float:right;">${email}</td>
          </tr>
          <tr><td>Message</td>
          <td style="color: #6E7074; float:right;">${message}</td>
          </tr>
        </tr>
        </table>`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error" + error);
      } else {
        console.log("Email sent:" + info.response);
        res.status(201).json({ status: 201, info });
      }
    });
  } catch (error) {
    console.log("Error" + error);
    res.status(401).json({ status: 401, error });
  }
});

module.exports = router1;
