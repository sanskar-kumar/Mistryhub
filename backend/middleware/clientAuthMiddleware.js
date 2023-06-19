const jwt = require("jsonwebtoken");

exports.checkToken = (req, res, next) => {
  const header = req.headers["authorization"];
  if (typeof header === "undefined") {
    //If header is undefined return Forbidden (403)
    res.sendStatus(403);
  } else {
    const bearer = header.split(" ");
    const token = bearer[1];
    //verify the JWT token generated for the user
    jwt.verify(token, "privateKeyClientMistryHub", (err, authorizedData) => {
      if (err) {
        //If error send Forbidden (403)
        // console.log("ERROR: Could not connect to the protected route");
        res.sendStatus(403);
      } else {
        //If token is successfully verified, we can send the authorized data
        res.json({
          message: "Successful log in",
          authorizedData,
        });
        // console.log(authorizedData);
        // console.log('SUCCESS: Connected to protected route');
      }
    });
  }
};
