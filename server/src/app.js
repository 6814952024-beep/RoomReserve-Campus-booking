const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth.routes");
const roomRoutes = require("./routes/room.routes");
const bookingRoutes = require("./routes/booking.routes");
const uploadRoutes = require("./routes/upload.routes");
const { notFound, errorHandler } = require("./middlewares/error.middleware");
const app = express();
// 1. Global middleware
app.use(cors());
app.use(express.json());
app.use("/api/uploads", express.raw({ type: "*/*", limit: "10mb" }));
// 2. Routes
app.get("/api/health", (req, res) => res.json({ status: "ok" }));
app.use("/api/auth", authRoutes);
app.use("/api/rooms", roomRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/uploads", uploadRoutes);
// 3. Error handling — must be LAST
app.use(notFound);
app.use(errorHandler);
module.exports = app;