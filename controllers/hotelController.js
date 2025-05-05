const { Hotel } = require("../models/Hotel");

// get all hotel
module.exports.getAllHotel = async (req, res) => {
  try {
    const hotels = await Hotel.find();

    res.status(200).json({
      success: true,
      message: "Successful",
      data: hotels,
    });
  } catch (err) {
    res.status(500).json({
      success: true,
      message: "internal server error",
    });
  }
};
