const express = require("express");
const router = new express.Router();
const nodemailer = require("nodemailer");

// send mail
router.post("/register", (req, res) => {
  const {
    email,
    fullName1,
    phone1,
    bookAt1,
    guestSize1,
    price1,
    flightFee1,
    carandfood1,
    service1,
    totalAmount1,
    title1,
    city1,
    bid1,
    photo1,
  } = req.body;
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
      subject: "Sending Email For Confirm Booking",
      html: `<style type="text/css">

      body, table, td, a { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
      table, td { mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
      img { -ms-interpolation-mode: bicubic; }
      
      img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; }
      table { border-collapse: collapse !important; }
      body { height: 100% !important; margin: 0 !important; padding: 0 !important; width: 100% !important; }
      
      
      a[x-apple-data-detectors] {
          color: inherit !important;
          text-decoration: none !important;
          font-size: inherit !important;
          font-family: inherit !important;
          font-weight: inherit !important;
          line-height: inherit !important;
      }
      
      @media screen and (max-width: 480px) {
          .mobile-hide {
              display: none !important;
          }
          .mobile-center {
              text-align: center !important;
          }
      }
      div[style*="margin: 16px 0;"] { margin: 0 !important; }
      </style>
      <body style="margin: 0 !important; padding: 0 !important; background-color: #eeeeee;" bgcolor="#eeeeee">
      
      
      <div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: Open Sans, Helvetica, Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;">
      For what reason would it be advisable for me to think about business content? That might be little bit risky to have crew member like them. 
      </div>
      
      <table border="0" cellpadding="0" cellspacing="0" width="100%" style="padding-top: 30px">
          <tr>
              <td align="center" style="background-color: #eeeeee;" bgcolor="#eeeeee">
              
              <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">

              <tr>
              <td align="center" valign="top" style="font-size:0; padding: 35px;" bgcolor="#16a085">
             
              <div style="display:inline-block; max-width:100%; min-width:100px; vertical-align:top; width:100%;">
                  <table align="left" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:400px;">
                      <tr>
                          <td align="left" valign="top" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 36px; font-weight: 800; line-height: 0px;" class="mobile-center">
                              <h1 style="font-size: 30px; font-weight: 800; color: #ffffff;">Tripzen</h1>
                          </td>
                      </tr>
                  </table>
              </div>
              </td>
              </tr>
                  
                  <tr>
                      <td align="center" style="padding: 25px 25px 10px 25px; background-color: #ffffff;" bgcolor="#ffffff">
                      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
                          <tr style=" margin-bottom: 20px;">
                              <td align="center" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px;">
                                  <img src="https://res.cloudinary.com/dxjrlld3t/image/upload/v1679654151/speech-bubble-3d-icon-message-concept-realistic-speech-bubble-check-mark-chat-vector-message-box_90220-975.jpg_bz0efo.jpg" width="125" height="120" style="display: block; border: 0px;" /><br>
                                  <h2 style="font-size: 25px; font-weight: 800; line-height: 36px; color: #333333; margin: 0;">
                                      Thank You For Your Booking!
                                  </h2>
                              </td>
                          </tr>
                         
                          <tr>
                              <td class="esd-block-banner" style="position: relative;" align="center"><a target="_blank"><img class="adapt-img esdev-stretch-width esdev-banner-rendered" style="display: block; margin-top: 40px" title="" src="https://res.cloudinary.com/dxjrlld3t/image/upload/v1679647419/j7lEbrUS_2x_i7maui.jpg" alt="" width="600"></a></td>
                          </tr>

                          <tr>
                              <td align="left" style="padding-top: 20px;">
                                  <table cellspacing="0" cellpadding="0" border="0" width="100%">
                                      <tr>
                                          <td width="75%" align="left" bgcolor="#eeeeee" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px;">
                                              Booking Confirmation #
                                          </td>
                                          <td width="25%" align="left" bgcolor="#eeeeee" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px;">
                                              ${bid1}
                                          </td>
                                      </tr>
                                      <tr>
                                          <td width="75%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 15px 10px 5px 10px;">
                                              Name
                                          </td>
                                          <td width="25%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 15px 10px 5px 10px;">
                                              ${fullName1}
                                          </td>
                                      </tr>
                                      <tr>
                                          <td width="75%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px;">
                                              Email
                                          </td>
                                          <td width="25%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px;">
                                              ${email}
                                          </td>
                                      </tr>
                                      <tr>
                                          <td width="75%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px;">
                                              Phone
                                          </td>
                                          <td width="25%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px;">
                                              ${phone1}
                                          </td>
                                      </tr>
                                      <tr>
                                          <td width="75%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px;">
                                              Booking Date
                                          </td>
                                          <td width="25%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px;">
                                              ${bookAt1}
                                          </td>
                                      </tr>
                                      <tr>
                                          <td width="75%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px;">
                                              Title
                                          </td>
                                          <td width="25%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding:  5px 10px;">
                                              ${title1}
                                          </td>
                                      </tr>
                                      <tr>
                                          <td width="75%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px;">
                                              City
                                          </td>
                                          <td width="25%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px;">
                                              ${city1}
                                          </td>
                                      </tr>
                                      <tr>
                                          <td width="75%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px;">
                                              People
                                          </td>
                                          <td width="25%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px;">
                                              ${guestSize1}
                                          </td>
                                      </tr>
                                  </table>
                              </td>
                          </tr>


                          <tr>
                              <td align="left" style="padding-top: 20px;">
                                  <table cellspacing="0" cellpadding="0" border="0" width="100%">
                                      <tr>
                                          <td width="75%" align="left" bgcolor="#eeeeee" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px;">
                                              All Charges #
                                          </td>
                                          <td width="25%" align="left" bgcolor="#eeeeee" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px;">
                                             
                                          </td>
                                      </tr>
                                      <tr>
                                          <td width="75%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 15px 10px 5px 10px;">
                                              Price
                                          </td>
                                          <td width="25%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 15px 10px 5px 10px;">
                                              ${price1}
                                          </td>
                                      </tr>
                                      <tr>
                                          <td width="75%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px;">
                                              Flight Fees
                                          </td>
                                          <td width="25%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px;">
                                              ${flightFee1}
                                          </td>
                                      </tr>
                                      <tr>
                                          <td width="75%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px;">
                                              Car and Food
                                          </td>
                                          <td width="25%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px;">
                                              ${carandfood1}
                                          </td>
                                      </tr>
                                      <tr>
                                          <td width="75%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px;">
                                              Service Fee
                                          </td>
                                          <td width="25%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding: 5px 10px;">
                                              ${service1}
                                          </td>
                                      </tr>
                                  </table>
                              </td>
                          </tr>

                          <tr>
                              <td align="left" style="padding-top: 20px; padding-bottom: 40px;">
                                  <table cellspacing="0" cellpadding="0" border="0" width="100%">
                                      <tr>
                                          <td width="75%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px; border-top: 3px solid #eeeeee; border-bottom: 3px solid #eeeeee;">
                                              TOTAL
                                          </td>
                                          <td width="25%" align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 800; line-height: 24px; padding: 10px; border-top: 3px solid #eeeeee; border-bottom: 3px solid #eeeeee;">
                                              ${totalAmount1}
                                          </td>
                                      </tr>
                                  </table>
                              </td>
                          </tr>
                      </table>
                      
                      </td>
                  </tr>
                   
                  <tr>
                      <td align="center" style="padding: 35px; background-color: #16a085;" bgcolor="#1b9ba3">
                      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
                          <tr>
                              <td align="center" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 16px; font-weight: 400; line-height: 24px; padding-top: 25px;">
                                  <h2 style="font-size: 24px; font-weight: 800; line-height: 30px; color: #ffffff; margin: 0;">
                                      Get 10% off your next booking.
                                  </h2>
                              </td>
                          </tr>
                          <tr>
                              <td align="center" style="padding: 25px 0 15px 0;">
                                  <table border="0" cellspacing="0" cellpadding="0">
                                      <tr>
                                          <td align="center" style="border-radius: 5px;" bgcolor="#66b3b7">
                                            <a href="http://localhost:3000/home" target="_blank" style="font-size: 18px; font-family: Open Sans, Helvetica, Arial, sans-serif; color: #16a085; text-decoration: none; border-radius: 5px; background-color: #defaf5; padding: 15px 30px; border: 1px solid #16a085; display: block;">Booking Again</a>
                                          </td>
                                      </tr>
                                  </table>
                              </td>
                          </tr>
                      </table>
                      </td>
                  </tr>
                  <tr>
                      <td align="center" style="padding: 35px; background-color: #ffffff;" bgcolor="#ffffff">
                      <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:600px;">
                          <tr>
                              <td align="left" style="font-family: Open Sans, Helvetica, Arial, sans-serif; font-size: 14px; font-weight: 400; line-height: 24px;">
                                  <p style="font-size: 14px; font-weight: 400; line-height: 20px; color: #777777;">
                                      If you didn't create an account using this email address, please ignore this email or <a href="#" target="_blank" style="color: #777777;">unsusbscribe</a>.
                                  </p>
                              </td>
                          </tr>
                      </table>
                      </td>
                  </tr>
              </table>
              </td>
          </tr>
      </table>`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error", error);
      } else {
        console.log("Email sent:" + info.response);
        res.status(201).json({ status: 201, info });
      }
    });
  } catch (error) {
    console.log("Error", error);
    res.status(401).json({ status: 401, error });
  }
});
module.exports = router;
