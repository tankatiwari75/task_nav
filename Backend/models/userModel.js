const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  email: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
  fullname: {
    required: true,
    type: String,
  },
  team_number: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("User", dataSchema);
