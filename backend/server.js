const express = require("express");
const connectDB = require("./conifg/db");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

connectDB();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

app.use("/api/worker", require("./routes/worker"));
app.use("/api/detail", require("./routes/detail"));
app.use("/api/client", require("./routes/client"));
app.use("/api/booking", require("./routes/booking"));
//port number allocation and listening on that port
let port = process.env.PORT;
if (port == null || port == "") {
  port = 8080;
}
app.listen(port, function () {
  console.log("Server started on port 8080");
});
