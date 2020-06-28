const express = require("express");
const router = express.Router();
const keyStore = require("../key-store");

router.get("/", keyStore, (req, res, next) => {
  console.log("GET /auth key", req.apiKey);
  const key = req.apiKey;
  if (key.length !== 0) {
    const obj = { apiKey: key };
    console.log("obj ", key);
    res.status(201);
    res.setHeader("x-api-key", key);
    res.json(obj);
    next();
  } else {
    res.status(500).send("Error reading file");
    const err = new Error("Error reading file");
    next(err);
  }
});

module.exports = router;
