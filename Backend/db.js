const mongoose = require("mongoose");
const { string } = require("zod");

const url =
  "mongodb+srv://ashibh21:MHG0WozQoAdnN80x@cluster0.pxjwtch.mongodb.net/";

const todoSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  completed: { type: Boolean },
});

const todo = mongoose.model("todo", todoSchema);
mongoose.connect(url);
module.exports = {
  todo,
};
