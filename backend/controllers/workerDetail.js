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
      console.log("The data is:- " , data);
      res.send(data);
    })
    .catch((err) => {
      console.log(err);
      // res.status(500).send({
      //   message: err.message || "Some error occurred while retrieving Workers.",
      // });
    });
};


