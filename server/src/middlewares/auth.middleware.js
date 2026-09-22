const jwt = require("jsonwebtoken");

const requireAuth = (req, res, next) => {
  const header = req.headers.authorization;
  if (!header || !header.startsWith("Bearer ")) return res.status(401).json({ message: "Authentication required" });
  try {
    req.user = jwt.verify(header.slice(7), process.env.JWT_SECRET || "development-secret");
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};

const requireAdmin = (req, res, next) => {
  if (req.user.role !== "admin") return res.status(403).json({ message: "Admin access required" });
  next();
};

module.exports = { requireAuth, requireAdmin };