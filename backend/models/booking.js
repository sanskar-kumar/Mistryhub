const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define the Booking schema
const bookingSchema = new Schema(
  {
    // this is linking od two schemas maybe called as an example of foreign key
    client: { type: Schema.Types.ObjectId, ref: "Client", required: true },
    worker: { type: Schema.Types.ObjectId, ref: "Worker", required: true },
    comment: { type: String },
    status: {
      type: String,
      enum: ["pending", "accepted", "declined"],
      default: "pending",
    },
  },
  { timestamps: true }
);

// Create the Booking model
const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
