const express = require("express");
const router = express.Router();

const { createBooking,updateRating, getClientBookings,getWorkerBookings,changeBookingStatus} = require("../controllers/booking");

router.post("/createBooking", createBooking);
router.post("/updateRating", updateRating);
router.get("/clientBookings",getClientBookings);
router.get("/workerBookings",getWorkerBookings);
router.post("/changeBookingStatus",changeBookingStatus)

module.exports = router; 