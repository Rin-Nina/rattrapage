const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userSchema: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);
// This code defines a schema for the user collection in MongoDB. The schema defines the fields that each document in the collection will have. The model is then exported so that it can be used in other parts of the application.
