// import gamee from "../models/Tour.js";
const { Name } = require("../models/Tour");

module.exports.addTour = async (req, res) => {
  const newTour = new Name(req.body);

  try {
    const savedTour = await newTour.save();
    console.log("savedTour :>> ", savedTour);
    res.status(200).json({
      success: true,
      message: "Successfully created",
      data: savedTour,
    });
  } catch (err) {
    console.log("err :>> ", err);
    res.status(500).json({
      success: false,
      message: "Failed to create. Try again",
    });
  }
};

// update tour
module.exports.updateTour = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedTour = await Name.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Successfully updated",
      data: updatedTour,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to update",
    });
  }
};

// delete tour
module.exports.deleteTour = async (req, res) => {
  const id = req.params.id;
  try {
    await Name.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Successfully deleted",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to delete",
    });
  }
};

// getSingle tour
module.exports.getSingleTour = async (req, res) => {
  const id = req.params.id;
  try {
    const tour = await Name.findById(id).populate("reviews");

    res.status(200).json({
      success: true,
      message: "Successful",
      data: tour,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Not found",
    });
  }
};

// getAll tour
module.exports.getAllTour = async (req, res) => {
  // for pagination
  const page = parseInt(req.query.page);

  try {
    const tours = await Name.find({})
      .populate("reviews")
      .skip(page * 12)
      .limit(12);

    res.status(200).json({
      success: true,
      count: tours.length,
      message: "Successful",
      data: tours,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Not found",
    });
  }
};

// get featured tour
module.exports.getFeaturedTour = async (req, res) => {
  try {
    const tours = await Name.find({ featured: true })
      .populate("reviews")
      .limit(8);

    res.status(200).json({
      success: true,
      message: "Successful",
      data: tours,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Not found",
    });
  }
};

// get tour by search
module.exports.getTourBySearch = async (req, res) => {
  // i means case sensitive
  const city = new RegExp(req.query.city, "i");
  // const distance = parseInt(req.query.distance);
  const maxGroupSize = parseInt(req.query.maxGroupSize);

  try {
    // gte means greater than equal
    const tours = await Name.find({
      city,
      // distance: { $gte: distance },
      maxGroupSize: { $gte: maxGroupSize },
    }).populate("reviews");

    res.status(200).json({
      success: true,
      message: "Successful",
      data: tours,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Not found",
    });
  }
};

// get tour counts
module.exports.getTourCount = async (req, res) => {
  try {
    const tourCount = await Name.estimatedDocumentCount({});

    res.status(200).json({
      success: true,
      data: tourCount,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch",
    });
  }
};
