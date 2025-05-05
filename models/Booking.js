const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },

    bookingId: {
      type: String,
    },

    userEmail: {
      type: String,
    },

    tourName: {
      type: String,
      required: true,
    },

    fullName: {
      type: String,
      required: true,
    },

    guestSize: {
      type: Number,
      required: true,
    },

    phone: {
      type: Number,
      required: true,
    },

    bookAt: {
      type: Date,
      required: true,
    },

    amount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports.Booking = mongoose.model("booking", bookingSchema);
