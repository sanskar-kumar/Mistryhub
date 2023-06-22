const Worker = require("../models/worker");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

exports.login = function (req, res) {
  Worker.findOne({ email: req.body.email })
    .then((worker) => {
      if (!worker) {
        return res.send("No worker found");
      }
      bcrypt.compare(req.body.password, worker.password, (err, result) => {
        if (err) {
          console.log("Authentication failed with error:- ", err);
        } else if (result) {
          jwt.sign(
            { worker },
            "privateKeyWorkerMistryHub",
            { expiresIn: "1h" },
            (err, token) => {
              if (err) {
                console.log("The JWT error is", err);
                return res.sendStatus(500);
              }
              const workerId = worker._id;
              const workerToken = token;
              res.send({ workerToken, workerId });
            }
          );
        } else {
          res.status(401).json({ error: "Incorrect password!" });
        }
      });
    })
    .catch((err) => {
      console.log("The error in controller is:", err);
      res.sendStatus(500);
    });
};

exports.register = function (req, res) {
  const {
    name,
    category,
    experience,
    location,
    contactNumber,
    about,
    email,
    password,
    serviceCost,
  } = req.body;

  Worker.findOne({ email })
    .then((worker) => {
      if (worker) {
        return res.json({ error: "The entered Email already exists!" });
      }

      bcrypt.hash(password, 10, (error, hash) => {
        if (error) {
          return res.status(500).json({ error });
        }

        const newWorker = new Worker({
          name,
          category,
          experience,
          location,
          contactNumber,
          about,
          email,
          password: hash,
          serviceCost,
        });

        newWorker
          .save()
          .then((data) => {
            // Send registration success email
            sendRegistrationEmail(name, email, category);
            res.send(data);
          })
          .catch((err) => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the worker.",
            });
          });
      });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

function sendRegistrationEmail(name, email, category) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "mistryhub1@gmail.com",
      pass: "wfrhzlqkidporeae",
    },
  });

  const mailOptions = {
    from: "MistryHub <mistryhub1@gmail.com> ",
    to: email,
    subject: "Welcome to MistryHub",
    html: `
      <html>
        <head>
          <style>
            body {
              background-color: #f2f2f2;
              font-family: Arial, sans-serif;
              color: #333333;
            }
            h1 {
              color: #0099cc;
              font-size: 24px;
              margin-bottom: 20px;
            }
            p {
              font-size: 16px;
              line-height: 1.5;
              margin-bottom: 10px;
            }
            strong {
              color: #ff9900;
            }
            .logo {
              display: block;
              margin: 20px auto;
              width: 200px;
              height: 100px;
            }
          </style>
        </head>
        <body>
          <h1>Welcome to MistryHub!</h1>
          <p>Hello <strong>${name}</strong>,</p>
          <p>Congratulations on registering with MistryHub as ${category}. Start offering your services and connect with clients.</p>
          <p>Thank you for joining us!</p>
          <p>Best regards,</p>
          <p>The MistryHub Team</p>
          <img class="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgFkKppvUg9yEoHgVrMANMdj_OdZ-aZxcb4Dp_rpKj0GAr-qZePZL65YqrVUHZyxts7pw" alt="MistryHub Logo">
        </body>
      </html>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending registration email:", error);
    } else {
      console.log("Email has been sent!");
    }
  });
}
