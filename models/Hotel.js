const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    maxcount: {
      type: Number,
      required: true,
    },

    phonenumber: {
      type: Number,
      required: true,
    },

    rentperday: {
      type: Number,
      required: true,
    },

    imageurls: [],

    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports.Hotel = mongoose.model("hotel", hotelSchema);
