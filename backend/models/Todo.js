const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  user: { type: String },
  description: { type: String },
  done: { type: Boolean },
});

module.exports = mongoose.model("Todo", todoSchema);
