const { Name } = require("../models/Tour");
const { Review } = require("../models/Review");

module.exports.createReview = async (req, res) => {
  const tourId = req.params.tourId;
  const newReview = new Review({ ...req.body });
  try {
    const savedReview = await newReview.save();

    // after creating a new review now update the reviews array of the tour
    await Name.findByIdAndUpdate(tourId, {
      $push: { reviews: savedReview._id },
    });

    res
      .status(200)
      .json({ success: true, message: "Review submitted!!", data: savedReview });
  } catch (err) {
    res.status(500).json({ success: false, message: "failed to submit" });
  }
};
