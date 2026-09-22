const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
  {
    roomName: { type: String, required: true, trim: true },
    building: { type: String, required: true, trim: true },
    capacity: { type: Number, required: true, min: 1 },
    equipment: { type: [String], default: [] },
    status: { type: String, enum: ["available", "maintenance"], default: "available" },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Room", roomSchema);