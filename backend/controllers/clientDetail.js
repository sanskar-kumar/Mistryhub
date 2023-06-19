const Client = require("../models/client");
exports.getClientDetail = async function (req, res) {
  try {
    const { clientId } = req.body;
    const client = await Client.findById(clientId);
    if (!client) {
      return res
        .status(500)
        .send({ message: "No client found with the given Id" });
    }
    res.send(client);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error finding client", error: error.message });
  }
};
