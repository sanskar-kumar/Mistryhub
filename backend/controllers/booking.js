// contains the controller code for booking a service
const Booking = require("../models/booking");
const Client = require("../models/client");
const Worker = require("../models/worker");

exports.createBooking = async function (req, res) {
  try {
    const { clientId, workerId, visitDate, visitTime, description, comment } =
      req.query;
    // Find the client and worker documents based on the provided IDs
    const client = await Client.findById(clientId);
    const worker = await Worker.findById(workerId);

    if (!worker) {
      return res.status(404).json({ message: "Worker not found" });
    }
    if (!client) {
      return res.status(404).json({ message: "Clientnot found" });
    }

    // Create a new booking instance and populate the necessary fields
    const booking = new Booking({
      client: client._id,
      worker: worker._id,
      visitDate,
      visitTime,
      description,
      comment,
      serviceCategory: worker.category,
      clientContact: client.contactNumber,
      workerContact: worker.contactNumber,
      clientName: client.name,
      workerName: worker.name,
      address: client.address,
    });

    // Save the booking in the database
    const savedBooking = await booking.save();

    res.status(201).json(savedBooking);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating booking", error: error.message });
  }
};
exports.updateRating = async function (req, res) {
  try {
    const { bookingId, ratingValue } = req.query;

    const booking = await Booking.findById(bookingId);
    if (!booking) {
      return res
        .status(404)
        .json({ message: "No booking found with the provided ID" });
    }

    // Update booking's rating
    booking.rating = Number(ratingValue);
    await booking.save();

    const worker = await Worker.findById(booking.worker);
    if (!worker) {
      return res
        .status(404)
        .json({ message: "No worker found for the booking" });
    }

    // Update worker's overall rating
    worker.ratingSum = Number(worker.ratingSum) + Number(ratingValue);
    worker.ratingAverage = worker.ratingSum / worker.servicesCompleted;
    worker.rewardPoints =
      Number(worker.rewardPoints) + 10 * Number(ratingValue);

    // Update specific rating count based on rating value
    switch (Number(ratingValue)) {
      case 1:
        worker.oneStarRatings += 1;
        break;
      case 2:
        worker.twoStarRatings += 1;
        break;
      case 3:
        worker.threeStarRatings += 1;
        break;
      case 4:
        worker.fourStarRatings += 1;
        break;
      case 5:
        worker.fiveStarRatings += 1;
        break;
    }

    await worker.save();

    res.json({ message: "Rating updated successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating rating", error: error.message });
  }
};

exports.getClientBookings = async function (req, res) {
  const { clientId, status } = req.query;
  Booking.find({ client: clientId, status })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving bookings.",
      });
    });
};
exports.getWorkerBookings = async function (req, res) {
  const { workerId, status } = req.query;
  Booking.find({ worker: workerId, status })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving bookings.",
      });
    });
};
exports.changeBookingStatus = async function (req, res) {
  try {
    const { bookingId, status } = req.query;
    const booking = await Booking.findById(bookingId);
    if (!booking) {
      res.return
        .status(500)
        .send({ message: "No booking found with the given booking id" });
    }
    booking.status = status;
    await booking.save();
    //update the services count now in the worker schema
    const worker = await Worker.findById(booking.worker);
    if (!worker) {
      return res
        .status(404)
        .json({ message: "No worker found for the booking" });
    }
    if (status === "completed") {
      if (!isNaN(worker.serviceCost)) {
        // console.error("Invalid service cost:", worker.serviceCost);
        // return res.status(400).json({ message: "Invalid service cost" });
        worker.totalEarning += Number(worker.serviceCost);
      }
      worker.servicesCompleted += 1;

      await worker.save();
    }
    res.json({ message: "Booking status updated successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating status", error: error.message });
  }
};
