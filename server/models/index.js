const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://Sansu123:Sansu123@cluster0.xud9gr7.mongodb.net/?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }
  )
  .then(() => console.log("Successfull"))
  .catch((err) => console.log(err));

const workerSchema= new mongoose.Schema({
    name: String,
    category: String,
    experience: Number,
    location: String,
    contactNumber: Number,
    about: String,
});
const Worker = mongoose.model("Worker", workerSchema);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post("/worker", function (req, res) {
  // Create a Tutorial
  const worker = new Worker({
    name: req.body.name,
    category: req.body.category,
    experience: req.body.experience,
    location: req.body.location,
    contactNumber: req.body.contactNumber,
    about: req.body.about
  });

  // Save Tutorial in the database
  worker
    .save()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the worker.",
      });
    });
});
app.get("/detail", (req, res) => {
  Worker.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Workers."
      });
    });
});

//api for finding the customDetail
app.get("/Detail/:customDetail", (req, res) => {
  Worker.find({category:req.params.customDetail})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Workers."
      });
    });
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port, function () {
  console.log("Server started on port 3000");
});
