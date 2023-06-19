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
  serviceCost: Number,
  totalEarning: {
    type: Number,
    default: 0,
  },
  rewardPoints: {
    type: Number,
    default: 0,
  },
  workerImage: {
    type: String,
    default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM-SkT0iLfQAzNW4Ehlxe6OL9QACvXHPAn8JvVCZPN-R-f76BXJF9XsNcNRuLy1NA4H50&usqp=CAU" // Set the default image filename or URL
  },
});

module.exports = Worker = mongoose.model("Worker", workerSchema);
