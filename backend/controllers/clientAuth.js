const Client = require("../models/client");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");

exports.clientRegister = function (req, res) {
  const { name, email, password, contactNumber, address } = req.body;
  Client.findOne({ email }).then((client) => {
    if (client) {
      res.json({ error: "The entered Email already exist!" });
    } else {
      bcrypt.hash(password, 10, (error, hash) => {
        if (error) res.status(500).json({ error });
        else {
          const client = new Client({
            name: name,
            email: email,
            password: hash,
            contactNumber: contactNumber,
            address: address,
          });
          client
            .save()
            .then((data) => {
              res.send(data);
            })
            .catch((err) => {
              res.status(500).send({
                message:
                  err.message ||
                  "Some error occurred while creating the client.",
              });
            })
            .then(() => {
              // create reusable transporter object using the default SMTP transport
              const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                  user: "mistryhub1@gmail.com",
                  pass: "wfrhzlqkidporeae",
                },
              });
              let info = transporter
                .sendMail({
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
                      <p>Congratulations on registering with MistryHub. Book your service hassle-free.</p>
                      <p>Thank you for joining us!</p>
                      <p>Best regards,</p>
                      <p>The MistryHub Team</p>
                      <img class="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgFkKppvUg9yEoHgVrMANMdj_OdZ-aZxcb4Dp_rpKj0GAr-qZePZL65YqrVUHZyxts7pw" alt="MistryHub Logo">
                    </body>
                  </html>
                `,
                })

                .then((info) => console.log("Email has been sent!"))
                .catch((err) => console.log(err));

              //   console.log("Message sent: %s", info.messageId);
            })
            .catch((err) => {
              res.status(500).send(err);
            });
        }
      });
    }
  });
};

exports.clientLogin = function (req, res) {
  Client.findOne({ email: req.body.email })
    .then((client) => {
      if (client) {
        // If user login is successful, compare the encrypted password
        bcrypt.compare(req.body.password, client.password, (err, result) => {
          if (err) {
            res.status(401).json({ error: "Authentication has failed!" });
          } else if (result) {
            // Generate JWT token for the user
            jwt.sign(
              { client },
              "privateKeyClientMistryHub",
              { expiresIn: "1h" },
              (err, token) => {
                if (err) {
                  console.log("The JWT error is", err);
                } else {
                  const clientId = client._id;
                  const clientToken = token;
                  res.send({ clientToken, clientId });
                  // console.log("The token is", token);
                }
              }
            );
          } else {
            res.status(401).json({ error: "Incorrect password!" });
          }
        });
      } else {
        res.status(404).json({ error: "No client found!" });
      }
    })
    .catch((err) => {
      console.log("The error in the controller is:", err);
      res.sendStatus(500); // or handle the error in an appropriate way
    });
};
