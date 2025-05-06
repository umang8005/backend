// import tourRoute from "./routes/tours.js";
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const tourRoute = require("./routes/tours");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const reviewRoute = require("./routes/reviews");
const bookingRoute = require("./routes/bookings");
const hotelRoute = require("./routes/hotels");
const flightRoute = require("./routes/flights");
const contactRoute = require("./routes/contact");
const adminRoute = require("./routes/admins");
const { User } = require("./models/User");
const { Name } = require("./models/Tour");
const { Booking } = require("./models/Booking");
const { Hotel } = require("./models/Hotel");
const { Flight } = require("./models/Flight");
const { Contact } = require("./models/Contact");
const { Admin } = require("./models/Admin");
const router = require("./routes/router");
const router1 = require("./routes/router1");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 4000;
// const port = 4000;
const corsOptions = {
  origin: true,
  credentials: true,
};


app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/hello", (req, res) => {
  res.send("Hello from the updated backend API!");
});


// database connection
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    
    
    
    // await mongoose.connect(
    //   "mongodb+srv://arpitkhunt83:IuG9UwGX3CgHPoiM@cluster0.vumwd9c.mongodb.net/tour",
    //   {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    //   }
    // );

    console.log("MongoDB database connected");
  } catch (err) {
    console.log("MongoDB database connection failed");
  }
};

// middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use("/api/v1/tours", tourRoute);
app.use("/api/v1/users", userRoute);
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/review", reviewRoute);
app.use("/api/v1/booking", bookingRoute);
app.use("/api/v1/hotels", hotelRoute);
app.use("/api/v1/flights", flightRoute);
app.use("/api/v1/contacts", contactRoute);
app.use("/api/v1/admins", adminRoute);
app.use(router);
app.use(router1);

require("dotenv").config();

// for admin panel
app.get("/users", async (req, res) => {
  try {
    const allUser = await User.find({});
    res.send({ status: "ok", data: allUser });
  } catch (error) {
    console.log(error);
  }
});

app.get("/hotels", async (req, res) => {
  try {
    const allHotel = await Hotel.find({});
    res.send({ status: "ok", data: allHotel });
  } catch (error) {
    console.log(error);
  }
});

app.get("/flights", async (req, res) => {
  try {
    const allFlight = await Flight.find({});
    res.send({ status: "ok", data: allFlight });
  } catch (error) {
    console.log(error);
  }
});

app.get("/tours", async (req, res) => {
  try {
    const allTour = await Name.find({});
    res.send({ status: "ok", data: allTour });
  } catch (error) {
    console.log(error);
  }
});

app.get("/users", async (req, res) => {
  try {
    const allUsers = await User.find({});
    res.send({ status: "ok", data: allUsers });
  } catch (error) {
    console.log(error);
  }
});

app.get("/bookings", async (req, res) => {
  try {
    const allBooking = await Booking.find({});
    res.send({ status: "ok", data: allBooking });
  } catch (error) {
    console.log(error);
  }
});

app.get("/contacts", async (req, res) => {
  try {
    const allContact = await Contact.find({});
    res.send({ status: "ok", data: allContact });
  } catch (error) {
    console.log(error);
  }
});

app.put("/bookings/:id", async (req, res) => {
  const Id = req.params.id;
  try {
    const allBooking = await Booking.findByIdAndUpdate({ _id: Id }, req.body, {
      new: true,
    });
    res.send({ status: "ok", data: allBooking });
  } catch (error) {
    console.log(error);
  }
});

app.put("/tours/:id", async (req, res) => {
  const Id = req.params.id;
  console.log("Id :>> ", Id);
  try {
    const allTour = await Name.findByIdAndUpdate({ _id: Id }, req.body, {
      new: true,
    });
    res.send({ status: "ok", data: allTour });
  } catch (error) {
    console.log(error);
  }
});

app.delete("/bookings/:id", async (req, res) => {
  const Id = req.params.id;
  try {
    const allBooking = await Booking.findByIdAndDelete({ _id: Id });
    return res.json(await Booking.find());
  } catch (error) {
    console.log(error);
  }
});

app.delete("/users/:id", async (req, res) => {
  const Id = req.params.id;
  try {
    const allUser = await User.findByIdAndDelete({ _id: Id });
    return res.json(await User.find());
  } catch (error) {
    console.log(error);
  }
});

app.delete("/tours/:id", async (req, res) => {
  const Id = req.params.id;
  try {
    const allTour = await Name.findByIdAndDelete({ _id: Id });
    return res.json(await Name.find());
  } catch (error) {
    console.log(error);
  }
});

app.post("/tours", async (req, res) => {
  const { allTour } = req.body;
  try {
    const newData = new Name({ allTour });
    await newData.save();
    return res.json(await Name.find());
  } catch (error) {
    console.log(error);
  }
});

app.post("/contacts", async (req, res) => {
  const { allContact } = req.body;
  try {
    const newData = new Contact({ allContact });
    await newData.save();
    return res.json(await Contact.find());
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  connect();
  console.log("server listening on port", port);
});

console.log("Mongo URI:", process.env.MONGO_URI);