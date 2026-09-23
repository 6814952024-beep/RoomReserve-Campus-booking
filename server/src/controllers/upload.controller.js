const path = require("path");

const uploadFile = async (req, res, next) => {
  try {
    if (!process.env.BLOB_READ_WRITE_TOKEN) {
      return res.status(500).json({ message: "Blob storage is not configured" });
    }

    if (!Buffer.isBuffer(req.body) || req.body.length === 0) {
      return res.status(400).json({ message: "A file body is required" });
    }

    const requestedName = req.headers["x-file-name"] || "upload.bin";
    const filename = path.basename(requestedName).replace(/[^a-zA-Z0-9._-]/g, "-");
    const { put } = await import("@vercel/blob");
    const blob = await put(`uploads/${Date.now()}-${filename}`, req.body, {
      access: "public",
      contentType: req.headers["content-type"] || "application/octet-stream",
      addRandomSuffix: true,
    });

    return res.status(201).json({ url: blob.url, pathname: blob.pathname });
  } catch (error) {
    return next(error);
  }
};

module.exports = { uploadFile };