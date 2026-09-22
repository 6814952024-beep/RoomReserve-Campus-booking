const Room = require("../models/room.model");

const getRooms = async (req, res, next) => {
  try { res.json(await Room.find().sort({ building: 1, roomName: 1 })); } catch (error) { next(error); }
};
const getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) return res.status(404).json({ message: "Room not found" });
    res.json(room);
  } catch (error) { next(error); }
};
const createRoom = async (req, res, next) => {
  try { res.status(201).json(await Room.create(req.body)); } catch (error) { next(error); }
};
const updateRoom = async (req, res, next) => {
  try {
    const room = await Room.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!room) return res.status(404).json({ message: "Room not found" });
    res.json(room);
  } catch (error) { next(error); }
};
const deleteRoom = async (req, res, next) => {
  try {
    const room = await Room.findByIdAndDelete(req.params.id);
    if (!room) return res.status(404).json({ message: "Room not found" });
    res.json({ message: "Room deleted" });
  } catch (error) { next(error); }
};

module.exports = { getRooms, getRoom, createRoom, updateRoom, deleteRoom };