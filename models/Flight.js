const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema(
  {
    time1: {
      type: String,
      required: true,
    },

    time2: {
      type: String,
      required: true,
    },

    city: {
      type: String,
      required: true,
    },

    state: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    t1: {
      type: String,
      required: true,
    },

    t2: {
      type: String,
      required: true,
    },

    t3: {
      type: String,
      required: true,
    },

    p1: {
      type: Number,
      required: true,
    },

    p2: {
      type: Number,
      required: true,
    },

    p3: {
      type: Number,
      required: true,
    },

    distance: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports.Flight = mongoose.model("flight", flightSchema);
