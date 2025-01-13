const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const PORT = 3000;

const todoRouter = require("./routes/todosRouter");

app.use("/todos", todoRouter);

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the todo app" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
