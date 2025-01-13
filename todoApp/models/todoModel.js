const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  completed: { type: Boolean, default: false },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

module.exports = mongoose.model("Todo", todoSchema);
// This code defines a schema for the todo collection in MongoDB. The schema defines the fields that each document in the collection will have. The model is then exported so that it can be used in other parts of the application.
