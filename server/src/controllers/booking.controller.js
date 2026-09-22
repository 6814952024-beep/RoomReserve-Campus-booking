const Booking = require("../models/booking.model");
const Room = require("../models/room.model");

const bookingQuery = (room, date, startTime, endTime) => ({
  room,
  date: { $gte: new Date(`${date}T00:00:00.000Z`), $lt: new Date(`${date}T23:59:59.999Z`) },
  status: { $in: ["pending", "approved"] },
  startTime: { $lt: endTime },
  endTime: { $gt: startTime },
});

const getBookings = async (req, res, next) => {
  try { res.json(await Booking.find().populate("user", "username email").populate("room").sort({ date: 1, startTime: 1 })); } catch (error) { next(error); }
};
const getMyBookings = async (req, res, next) => {
  try { res.json(await Booking.find({ user: req.user.id }).populate("room").sort({ date: -1 })); } catch (error) { next(error); }
};
const createBooking = async (req, res, next) => {
  try {
    const { room, date, startTime, endTime, purpose } = req.body;
    if (!room || !date || !startTime || !endTime || startTime >= endTime) return res.status(400).json({ message: "Valid room, date and time range are required" });
    const selectedRoom = await Room.findById(room);
    if (!selectedRoom) return res.status(404).json({ message: "Room not found" });
    if (selectedRoom.status === "maintenance") return res.status(400).json({ message: "Room is under maintenance" });
    if (await Booking.findOne(bookingQuery(room, date, startTime, endTime))) return res.status(409).json({ message: "Room is already booked for this time" });
    res.status(201).json(await Booking.create({ user: req.user.id, room, date, startTime, endTime, purpose }));
  } catch (error) { next(error); }
};
const updateBookingStatus = async (req, res, next) => {
  try {
    if (!["approved", "rejected"].includes(req.body.status)) {
      return res.status(400).json({ message: "Status must be approved or rejected" });
    }
    const booking = await Booking.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true, runValidators: true }).populate("user", "username email").populate("room");
    if (!booking) return res.status(404).json({ message: "Booking not found" });
    res.json(booking);
  } catch (error) { next(error); }
};
const cancelBooking = async (req, res, next) => {
  try {
    const filter = req.user.role === "admin" ? { _id: req.params.id } : { _id: req.params.id, user: req.user.id };
    const booking = await Booking.findOneAndUpdate(filter, { status: "cancelled" }, { new: true });
    if (!booking) return res.status(404).json({ message: "Booking not found" });
    res.json(booking);
  } catch (error) { next(error); }
};

module.exports = { getBookings, getMyBookings, createBooking, updateBookingStatus, cancelBooking };
