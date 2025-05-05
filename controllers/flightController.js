const { Flight } = require("../models/Flight");

// get all hotel
module.exports.getAllFlight = async (req, res) => {
  try {
    const flights = await Flight.find();

    res.status(200).json({
      success: true,
      message: "Successful",
      data: flights,
    });
  } catch (err) {
    res.status(500).json({
      success: true,
      message: "internal server error",
    });
  }
};