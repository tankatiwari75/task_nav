const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  task_description: {
    required: true,
    type: String,
  },
  due_date: {
    required: true,
    type: Date,
  },
  is_completed: {
    default: false,
    type: Boolean,
  },
});

module.exports = mongoose.model("Tasks", dataSchema);
