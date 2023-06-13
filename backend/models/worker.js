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
  ratingSum: Number,
  oneStar: Number,
  twoStar: Number,
  threeStar: Number,
  fourStar: Number,
  fiveStar: Number,
  ratingAverage: Number,
  ratingCount: Number,
  rating: Number,
  servicesCompleted: Number,
  servicesAccepted: Number,
  servicesRejected: Number,
});
module.exports = Worker = mongoose.model("Worker", workerSchema);
