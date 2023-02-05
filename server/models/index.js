const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
const jwt = require('jsonwebtoken');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// mongodb+srv://Sansu123:<password>@cluster0.xud9gr7.mongodb.net/?retryWrites=true&w=majority
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
    email: String,
    password: String
});
const Worker = mongoose.model("Worker", workerSchema);
const checkToken = (req, res, next) => {
  const header = req.headers['authorization'];

  if(typeof header !== 'undefined') {
      const bearer = header.split(' ');
      const token = bearer[1];

      req.token = token;
      next();
  } else {
      //If header is undefined return Forbidden (403)
      res.sendStatus(403)
  }
}


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
    about: req.body.about,
    email: req.body.email,
    password: req.body.password
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


app.post("/login", function (req, res) {
  Worker.findOne({ email: req.body.email, password: req.body.password }, function (err, worker) {
    if (err) {
      console.log(err);
    }
    else {
      if (worker) {
        //if user log in success, generate a JWT token for the user with a secret key
        jwt.sign({worker}, 'privatekey', { expiresIn: '1h' },(err, token) => {
          if(err) { console.log("the jwt error is",err) }    
          // console.log("the token is",token);
          res.send(token);
          console.log("the token is",token);
      });
        // res.send(worker);
      } else {
        res.send("No worker found");
      }
    }
  });
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});

//This is a protected route 
    app.get('/user/data', checkToken, (req, res) => {
        //verify the JWT token generated for the user
        jwt.verify(req.token, 'privatekey', (err, authorizedData) => {
            if(err){
                //If error send Forbidden (403)
                console.log('ERROR: Could not connect to the protected route');
                res.sendStatus(403);
            } else {
                //If token is successfully verified, we can send the autorized data 
                res.json({
                    message: 'Successful log in',
                    authorizedData
                });
                console.log('SUCCESS: Connected to protected route');
            }
        })
    });

    // app.put("/logout", authToken, function (req, res) {
    //   const authHeader = req.headers["authorization"];
    //   jwt.sign(authHeader, "", { expiresIn: 1 }, (logout, err) => {
    //     if (logout) {
    //       res.send({ msg: "You have been Logged Out" });
    //     } else {
    //       res.send({ msg: "Error" });
    //     }
    //   });
    // });

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
