module.exports = mongoose => {
    const Workers = mongoose.model(
      "worker",
      mongoose.Schema(
        {
            name: String,
            category: String,
            experience: Number,
            location: String,
            contactNumber: Number,
            about: String,
        },
        { timestamps: true }
      )
    );
  
    return Workers;
  };