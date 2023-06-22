const Worker = require("../models/worker");

exports.workerDetail = function (req, res) {
  Worker.find({})
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Workers.",
      });
    });
};

//api for finding the customDetail category wise
exports.customDetail = function (req, res) {
  Worker.find({ category: req.params.customDetail })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Workers.",
      });
    });
};

exports.singleDetail = function (req, res) {
  Worker.find({ _id: req.params.workerId })
    .then((data) => {
      // console.log("The data is:- " , data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      // res.status(500).send({
      //   message: err.message || "Some error occurred while retrieving Workers.",
      // });
    });
};

exports.getWorkerDetail = async function (req, res) {
  try {
    const { workerId } = req.query;
    const worker = await Worker.findById(workerId);
    if (!worker) {
      return res
        .status(500)
        .send({ message: "No Worker found with the given Id" });
    }
    res.send(worker);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error finding Worker", error: error.message });
  }
};

exports.updateWorkerDetail=async (req,res) => {
  try {
    const {name,contactNumber,about,experience,location,serviceCost,workerId}=req.query;
    const worker=await Worker.findById(workerId);
    if (!worker) {
      return res
        .status(404)
        .json({ message: "No worker found with the provided ID" });
    }
    //update workers profile
    worker.name=name;
    worker.contactNumber=contactNumber;
    worker.about=about;
    worker.experience=experience;
    worker.location=location;
    worker.serviceCost=Number(serviceCost);
    await worker.save();
    res.json({message: "Worker details updated successfully"});

  } catch (error) {
    res
      .status(500)
      .json({ message: "Error updating worker", error: error.message });
  }
}

