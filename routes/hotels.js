const express = require("express");
const router = express.Router();

const { getAllHotel } = require("../controllers/hotelController");
const { verifyAdmin } = require("../utils/verifyToken");

router.get("/", verifyAdmin, getAllHotel);

module.exports = router;
