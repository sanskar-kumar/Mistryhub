const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://Sansu123:Sansu123@cluster0.xud9gr7.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfully connected to the database.");
  } catch (error) {
    console.error("Connection to the database failed:", error);
  }
};

module.exports = connectDB;
