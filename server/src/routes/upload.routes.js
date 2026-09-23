const express = require("express");
const { requireAuth, requireAdmin } = require("../middlewares/auth.middleware");
const { uploadFile } = require("../controllers/upload.controller");

const router = express.Router();

router.post("/", requireAuth, requireAdmin, uploadFile);

module.exports = router;