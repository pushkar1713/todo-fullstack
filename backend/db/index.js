const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://pushkar1713:cUHs92AswtTclzXK@cluster0.w6lkxlt.mongodb.net/todo"
);

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
  todo,
};
