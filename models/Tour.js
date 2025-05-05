const mongoose = require("mongoose");

const tourSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      // required: true,
      unique: true,
    },
    city: {
      type: String,
      // required: true,
    },
    address: {
      type: String,
      // required: true,
    },
    distance: {
      type: Number,
      // required: true,
    },
    photo: {
      type: String,
      // required: true,
    },
    desc: {
      type: String,
      // required: true,
    },
    price: {
      type: Number,
      // required: true,
    },
    maxGroupSize: {
      type: Number,
      // required: true,
    },
    duration: {
      type: String,
      // required: true,
    },
    hotel: {
      type: String,
      // required: true,
    },
    flight: {
      type: String,
      // required: true,
    },
    place: {
      type: String,
      // required: true,
    },
    photo1: {
      type: String,
      // required: true,
    },
    photo2: {
      type: String,
      // required: true,
    },
    photo3: {
      type: String,
      // required: true,
    },
    photo4: {
      type: String,
      // required: true,
    },
    reviews: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Review",
      },
    ],
    schedule: [
      {
        day: {
          type: String,
          // required: true,
        },
        atitle: {
          type: String,
          // required: true,
        },
        message1: {
          type: String,
          // required: true
        },
        message2: {
          type: String,
          // required: true
        },
        message3: {
          type: String,
          // required: true
        },
        img: {
          type: String,
          // required: true
        },
      },
    ],

    featured: {
      type: Boolean,
      default: false,
    },

    limit: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports.Name = mongoose.model("tour", tourSchema);
