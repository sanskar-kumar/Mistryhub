const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the Booking schema
const bookingSchema = new Schema(
  {
    // this is linking od two schemas maybe called as an example of foreign key
    client: { type: Schema.Types.ObjectId, ref: "Client", required: true },
    worker: { type: Schema.Types.ObjectId, ref: "Worker", required: true },
    clientName:{type:String},
    workerName:{type:String},
    bookingDate: { type: Date, default: Date.now },
    visitDate: { type: Date },
    visitTime: {
      type: String,
      // enum: ["10AM - 12PM", "2PM - 5PM", "6PM - 9PM"],
    },
    status: {
      type: String,
      enum: ["pending", "accepted", "declined","completed"],
      default: "pending",
    },
    description: { type: String },
    comment:{type:String},
    serviceCategory: { type: String },
    clientContact: { type: String },
    workerContact: { type: String },
    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },
    cost:{
      type:Number
    },
    address:String,

  },
  { timestamps: true }
);

// Create the Booking model
const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
