const mongoose = require("mongoose");

const connect = async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/Event_Management_App");
  console.log("connect database");
};

module.exports = connect;

