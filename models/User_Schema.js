const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  
});

let User = mongoose.model("User", userModel);

module.exports = User;

