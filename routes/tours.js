const express = require("express");
const {
  addTour,
  updateTour,
  deleteTour,
  getSingleTour,
  getAllTour,
  getTourBySearch,
  getTourCount,
  getFeaturedTour,
} = require("../controllers/tourController");
const { verifyAdmin, verifyUser } = require("../utils/verifyToken");

const router = express.Router();

// create new tour
router.post("/", verifyAdmin, addTour);

// update tour
router.put("/:id", verifyAdmin, updateTour);

// delete tour
router.delete("/:id", verifyAdmin, deleteTour);

// getSingle tour
router.get("/:id", getSingleTour);

// getAll tour
router.get("/", getAllTour);

// get tour by search
router.get("/search/getTourBySearch", getTourBySearch);
router.get("/search/getFeaturedTours", getFeaturedTour);
router.get("/search/getTourCount", getTourCount);

module.exports = router;
