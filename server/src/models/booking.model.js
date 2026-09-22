const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    room: { type: mongoose.Schema.Types.ObjectId, ref: "Room", required: true },
    date: { type: Date, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    purpose: { type: String, trim: true },
    status: { type: String, enum: ["pending", "approved", "rejected", "cancelled"], default: "pending" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", bookingSchema);