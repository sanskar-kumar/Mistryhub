const mongoose = require("mongoose");
const clientSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  contactNumber: String,
  address: String,
});
module.exports = Client = mongoose.model("Client", clientSchema);
