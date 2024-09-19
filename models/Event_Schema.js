const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    location: { type: String, required: true },
    maxAttendees: { type: Number, required: true },
    image: { type: String },
    attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" , required : true }],
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User" , required : true
     },
  },
  { timestamps: true }
);

let Event = mongoose.model("Event", eventSchema);

module.exports = Event;