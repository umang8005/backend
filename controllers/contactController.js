const { Contact } = require("../models/Contact");

// get all hotel
module.exports.getAllContact = async (req, res) => {
  let data = req.body;

  try {
    const contacts = await Contact.create(data);

    res.status(200).json({
      success: true,
      message: "Successful",
      data: contacts,
    });
  } catch (err) {
    console.log("err :>> ", err);
    res.status(500).json({
      success: true,
      message: "internal server error",
    });
  }
};
