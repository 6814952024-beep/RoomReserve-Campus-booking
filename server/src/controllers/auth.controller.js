const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const createToken = (user) => jwt.sign(
  { id: user._id, username: user.username, role: user.role },
  process.env.JWT_SECRET || "development-secret",
  { expiresIn: "1d" }
);

const register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) return res.status(400).json({ message: "username, email and password are required" });
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) return res.status(409).json({ message: "Username or email already exists" });
    const user = await User.create({ username, email, password: await bcrypt.hash(password, 10) });
    res.status(201).json({ user: { id: user._id, username: user.username, email: user.email, role: user.role }, token: createToken(user) });
  } catch (error) { next(error); }
};

const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user || !(await bcrypt.compare(req.body.password || "", user.password))) return res.status(401).json({ message: "Invalid email or password" });
    res.json({ user: { id: user._id, username: user.username, email: user.email, role: user.role }, token: createToken(user) });
  } catch (error) { next(error); }
};

module.exports = { register, login };