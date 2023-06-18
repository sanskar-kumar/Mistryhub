const mongoose = require("mongoose");
const workerSchema = new mongoose.Schema({
  name: String,
  category: String,
  experience: Number,
  location: String,
  contactNumber: Number,
  about: String,
  email: String,
  password: String,
  ratingSum: {
    type: Number,
    default: 0,
  },
  ratingAverage: {
    type: Number,
    default: 0,
  },
  rating: Number,
  servicesCompleted: {
    type: Number,
    default: 0,
  },
  oneStarRatings: {
    type: Number,
    default: 0,
  },
  twoStarRatings: {
    type: Number,
    default: 0,
  },
  threeStarRatings: {
    type: Number,
    default: 0,
  },
  fourStarRatings: {
    type: Number,
    default: 0,
  },
  fiveStarRatings: {
    type: Number,
    default: 0,
  },
});

module.exports = Worker = mongoose.model("Worker", workerSchema);
