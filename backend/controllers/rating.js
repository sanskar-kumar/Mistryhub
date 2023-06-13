const Worker = require("../models/worker");

//controller to update the ratings 
exports.updateRating = function (req, res) {
  const rating = req.body.rating;
  console.log(rating);
  if (rating == "oneStar") {
    Worker.updateOne({ email: req.body.email }, { $inc: { oneStar: 1 } })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error updating rating",
        });
      });
  } else if (rating == "twoStar") {
    Worker.updateOne(
      { email: req.body.email },
      { $inc: { twoStar: 1, ratingCount: 1 } }
    )
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error updating rating",
        });
      });
  } else if (rating == "threeStar") {
    Worker.updateOne({ email: req.body.email }, { $inc: { threeStar: 1 } })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error updating rating",
        });
      });
  } else if (rating == "fourStar") {
    Worker.updateOne({ email: req.body.email }, { $inc: { fourStar: 1 } })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error updating rating",
        });
      });
  } else if (rating == "fiveStar") {
    Worker.updateOne({ email: req.body.email }, { $inc: { fiveStar: 1 } })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: "Error updating rating",
        });
      });
  }
};
// api to fetch rating of a particular individual
exports.getRating = function (req, res) {
    Worker.find({ email: req.body.email })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message ||
            "Some error occurred while retrueving rating of worker.",
        });
      });
  };